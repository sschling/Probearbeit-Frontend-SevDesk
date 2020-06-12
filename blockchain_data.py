import requests
import json

def getValues(json, xOrY):
    data = []
    for key in json:
        if key == "values":
            allData = json[key]
            for jsElement in allData:
                for k in jsElement:
                    if k == xOrY:
                        data.append(jsElement[k])
    return data


url="https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json"
response = requests.get(url)
xValues = []
yValues = []
if(response.ok):
    jsonData = json.loads(response.content)
    xValues = getValues(jsonData, "x")
    yValues = getValues(jsonData, "y")
    file = open("xData.js", "w", newline='')
    content = "var xData = ["
    for i in xValues:
        content += str(i) + ", "
    content += "]"
    file.write(content)
    file.close()
    file2 = open("yData.js", "w", newline='')
    content2 = "var yData = ["
    for j in yValues:
        content2 += str(j) + ", "
    content2 += "];"
    file2.write(content2)
    file2.close()


print(response.content)
