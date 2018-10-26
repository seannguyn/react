from google.cloud import vision
import io
import os
from google.oauth2 import service_account
import re
import sys

course = r"^[A-Z]{4}[0-9]{4}$"
time = r"^[0-9]{1,2}:[0-9]{2}$"

classContent = {}

date = []
dateList = ['Monday','Tuesday','Wednesday','Thursday','Friday','Sat','Sun']
dateScanned = []

discarded = ['am','pm','Hour']

timeDict = {}
timeList = []

scanFrom_y = 0
scanFrom_x = 0
scanEnd_x = 0
scanEnd_y = 0

timeGap = 0

def printInfo(text):
    print('\n"{}"'.format(text.description))
    vertices = (['({},{})'.format(vertex.x, vertex.y)
                for vertex in text.bounding_poly.vertices])
    print('bounds: {}'.format(','.join(vertices)))

def setUpTimeCol(text):
    # printInfo(text)
    padding = 5

    timeDict[text.description] = {}
    upper = text.bounding_poly.vertices[0].y if (text.bounding_poly.vertices[0].y > text.bounding_poly.vertices[1].y) else text.bounding_poly.vertices[1].y

    timeDict[text.description]['start'] = upper + padding
    timeList.append(text.description)

    if (len(timeList) == 2):
        global timeGap
        timeGap = timeDict[timeList[1]]['start'] - timeDict[timeList[0]]['start']

def convertDateToNum(text):
    if (text == "Monday"):
        return 0
    if (text == "Tuesday"):
        return 1
    if (text == "Wednesday"):
        return 2
    if (text == "Thursday"):
        return 3
    if (text == "Friday"):
        return 4
    if (text == "Sat"):
        return 5

def withinTable(poly):

    min_x = poly[0].x if (poly[0].x < poly[3].x) else poly[3].x
    max_x = poly[1].x if (poly[1].x > poly[2].x) else poly[2].x

    min_y = poly[0].y if (poly[0].y < poly[1].y) else poly[1].y
    max_y = poly[2].y if (poly[2].y > poly[3].y) else poly[3].y

    if (scanFrom_x < min_x and scanEnd_x > max_x and scanFrom_y < min_y and scanEnd_y > max_y):
        return True
    else:
        return False

def initDate():
    date.append({"dateName": "Monday", "start_x": 0, "end_x": 0, 'content': []})
    date.append({"dateName": "Tuesday", "start_x": 0, "end_x": 0, 'content': []})
    date.append({"dateName": "Wednesday", "start_x": 0, "end_x": 0, 'content': []})
    date.append({"dateName": "Thursday", "start_x": 0, "end_x": 0, 'content': []})
    date.append({"dateName": "Friday", "start_x": 0, "end_x": 0, 'content': []})

def setUpDateCol(text):
    # printInfo(text)

    if (text.description == 'Sat' or text.description == 'Sun'):

        if (text.description == 'Sat'):
            prevDate = convertDateToNum(text.description) - 1
            date[prevDate]['end_x'] = text.bounding_poly.vertices[0].x
            global scanEnd_x
            scanEnd_x = text.bounding_poly.vertices[0].x

        return

    # print("ENTER here", text.description, text.bounding_poly.vertices[0].x)
    # find the start_x coordidate of thisDate
    thisDate = convertDateToNum(text.description)
    date[thisDate]['start_x'] = text.bounding_poly.vertices[0].x

    # this start_x of thisDate will be the end_x of prevDate
    if (thisDate > 0):
        prevDate = thisDate - 1
        date[prevDate]['end_x'] = text.bounding_poly.vertices[0].x

    dateScanned.append(text.description)

    tempScanFrom = text.bounding_poly.vertices[2].y if (text.bounding_poly.vertices[2].y > text.bounding_poly.vertices[3].y) else text.bounding_poly.vertices[3].y

    global scanFrom_y
    global scanFrom_x

    if (text.description == 'Monday'):
        scanFrom_x = text.bounding_poly.vertices[0].x - 5 # - 5 for padding

    if (scanFrom_y < tempScanFrom):
        scanFrom_y = tempScanFrom

def assignDate(text):

    for day in date:
        if (day['start_x'] < text.bounding_poly.vertices[0].x and day['end_x'] > text.bounding_poly.vertices[1].x):
            day['content'].append(text.description)

def detect_text(path):
    """Detects text in the file."""
    from google.cloud import vision
    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations

    print('Texts:')

    # Set up time and date col, bound of the table to be scanned
    for text in texts:
        if (len(text.description) > 25):
            continue

        elif (re.match(time,text.description)):
            setUpTimeCol(text)

        elif text.description in dateList:
            setUpDateCol(text)

    global scanEnd_y
    scanEnd_y = timeDict[timeList[-1]]['start'] + timeGap

    # Ok, after we have the table bounds, only get the content within that bound
    for text in texts:
        if (len(text.description) > 25):
            continue

        if (withinTable(text.bounding_poly.vertices)):
            assignDate(text)

def printDateInfo():
    for day in date:
        print(day['dateName'],": ")
        print(day['content'])


if __name__ == '__main__':

    initDate()

    dir_path = os.path.dirname(os.path.realpath(__file__))

    # file_name = dir_path+"/TestData"+"/ben.png" # CHECKED dates, UNCHECKED time
    # file_name = dir_path+"/TestData"+"/sean_1.png" # CHECKED dates, UNCHECKED time
    # file_name = dir_path+"/TestData"+"/sean_2.png" # CHECKED dates, UNCHECKED time
    file_name = dir_path+"/TestData"+"/sean_3.png" # CHECKED dates, UNCHECKED time
    # file_name = dir_path+"/TestData"+"/timetable-fullscreen.png" # CHECKED dates, UNCHECKED time
    # file_name = dir_path+"/TestData"+"/timetable-narrow-zoom.png" # CHECKED dates, UNCHECKED time
    # file_name = dir_path+"/TestData"+"/timetable-rotated.png" # CHECKED dates, UNCHECKED time
    # file_name = dir_path+"/TestData"+"/timetable-small.png" # FAIL BOTH
    # file_name = dir_path+"/TestData"+"/timetable-tall.png" # CHECKED dates, UNCHECKED time
    # file_name = dir_path+"/TestData"+"/timetable.png" # FAIL BOTH
    # file_name = dir_path+"/TestData"+"/timetable-wide.png" # FAIL BOTH

    detect_text(file_name)

    # print()
    # print("scanFrom_x: ",scanFrom_x, "scanFrom_y: ",scanFrom_y, 'scanEnd_x: ', scanEnd_x, 'scanEnd_y: ',scanEnd_y)
    print()
    printDateInfo()
    # print(timeDict)
