const jsListItems = [
  {
    Reciever: '<i class="fa fa-shopping-cart"></i>Tesco Market',
    Type: "Shopping",
    Date: "13 Dec 2020",
    Amount: "$75.67",
  },
  {
    Reciever: '<i class="fa fa-car"></i> ElectroMen Market',
    Type: "Shopping",
    Date: "14 Dec 2020",
    Amount: "$250.00",
  },
  {
    Reciever: '<i class="fas fa-leaf"></i> Fiorgio Restaurant',
    Type: "Food",
    Date: "07 Dec 2020",
    Amount: "$19.50",
  },
  {
    Reciever: '<i class="fa fa-user"></i> John Mathew Kayne',
    Type: "Sport",
    Date: "06 Dec 2020",
    Amount: "$350",
  },
  {
    Reciever: '<i class="fa fa-user"></i> Ann Marlin',
    Type: "Shopping",
    Date: "31 Nov 2020",
    Amount: "$430",
  },
];

const jsList = document.getElementById("js-list");
console.log(jsList);

for (i in jsListItems) {
  const forAddtoHtml =
    "<tr class='transaction-history-table-item'><td class='js-list-item'><button class='js-list-item-button'>" +
    jsListItems[i].Reciever +
    "</button></td><td class='unactive-text'>" +
    jsListItems[i].Type +
    "</td><td class='unactive-text'>" +
    jsListItems[i].Date +
    "</td><td class='bold-text'>" +
    jsListItems[i].Amount +
    "</td></tr>";
  jsList.innerHTML += forAddtoHtml;
}

const jsListItemsFromHtml = document.getElementsByClassName("js-list-item");

console.log(jsListItemsFromHtml);

for (let i = 0; i < jsListItemsFromHtml.length; i++) {
  const forDeleteItemsList = document.getElementsByClassName(
    "transaction-history-table-item"
  );
  const jsListItem = document.getElementsByClassName("js-list-item-button")[i];
  console.log(jsListItem);
  const removeFromListEventCallBack = () => {
    console.log("event");
    forDeleteItemsList[i].innerHTML = "";
  };

  jsListItem.addEventListener("click", removeFromListEventCallBack);
}
