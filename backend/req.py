import requests
import pprint
url = "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/"

# Передаём данные как form-data
data = {
    'itemcount': 1,
    'publishedfileids[0]': '3518155451'  # Пример ID воркшоп-обоев
}

response = requests.post(url, data=data)

if response.status_code == 200:
    print("✅ Успешно получено!")
    pprint.pprint(response.json())
else:
    print("❌ Ошибка:", response.status_code)