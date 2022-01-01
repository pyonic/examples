#Web scraper for https://www.python.org/ - Upcoming Events List
import requests
from bs4 import BeautifulSoup

url = 'https://www.python.org/'

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

response = requests.get(url, headers = headers)

soup = BeautifulSoup(response.content, 'html.parser')

event_widget = soup.find('div',{'class': 'event-widget'})

event_widget_soup = BeautifulSoup(str(event_widget), 'html.parser')

lis = event_widget_soup.findAll('li')

lis_soup = BeautifulSoup(str(lis), 'html.parser')

titles = lis_soup.findAll('a') # Name of event

times = lis_soup.findAll('time') #Date of event

for i in range(len(titles)):
	print(times[i].text,' - ',titles[i].text)
