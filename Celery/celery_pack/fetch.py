# https://www.agiliq.com/blog/2015/07/getting-started-with-celery-and-redis/

import requests
import time
from celery_config import app 

@app.task
def fetch_url(url):
	resp = requests.get(url)
	print(resp.status_code)

def func(urls):
	for url in urls:
		fetch_url.delay(url)

if __name__ == "__main__":
	func(["https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/users", "https://facebook.com", "https://twitter.com", "https://alexa.com"])
