from google.cloud import vision
import io
import os
from google.oauth2 import service_account



def detect_text_uri(uri):
    """Detects text in the file located in Google Cloud Storage or on the Web.
    """

    client = vision.ImageAnnotatorClient()

    image = vision.types.Image()
    image.source.image_uri = uri

    response = client.text_detection(image=image)
    texts = response.text_annotations
    print('Texts:')

    for text in texts:
        if ("bed" in text.description.lower()):
            print('\n"{}"'.format(text.description))

            vertices = (['({},{})'.format(vertex.x, vertex.y)
                    for vertex in text.bounding_poly.vertices])

            print('bounds: {}'.format(','.join(vertices)))


def ocr():
    print("hello")

if __name__ == '__main__':
    ocr()
    file_name = "https://i2.au.reastatic.net/2024x1272-resize,r=33,g=40,b=46/f1bd5b778ee463b3d2c276f95f41b74bf5768174ca8e7d447f51e980896405d3/image.jpg"
    
    detect_text_uri(file_name)
