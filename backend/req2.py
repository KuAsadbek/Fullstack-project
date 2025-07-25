import requests
from bs4 import BeautifulSoup
import re

# ID обоев
publishedfileid = "2347762662"
url = f"https://steamcommunity.com/sharedfiles/filedetails/?id={publishedfileid}"

headers = {
    "User-Agent": "Mozilla/5.0"
}

# Получаем HTML-страницу
res = requests.get(url, headers=headers)
soup = BeautifulSoup(res.text, "html.parser")

# Ищем все возможные ссылки на контент (вдруг .zip или .pkg)
links = soup.find_all("a", href=True)
files = []

for link in links:
    href = link['href']
    if re.search(r'\.(zip|pkg|webm|mp4)$', href):
        files.append(href)

# Также ищем в JavaScript и других элементах страницы
scripts = soup.find_all("script")
for script in scripts:
    matches = re.findall(r'https?://[^\s"]+\.(zip|pkg|webm|mp4)', script.text)
    files.extend(matches)

# Удаляем дубликаты
files = list(set(files))

# Выводим результат
if files:
    print("✅ Найдены ссылки на файл(ы):")
    for f in files:
        print(f)
else:
    print("❌ Не удалось найти прямые ссылки на файлы.")
