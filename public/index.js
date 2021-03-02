var clickId = "";
const gamePage = document.getElementById("game-page");
const machineList = document.getElementById("machine-list");
const elementId = [
  {
    name: "アイムジャグラーEX-AE",
    idName: "juggler-ex-ae",
    url: "juggler-ex-ae/index.html",
  },
  {
    name: "coming soon",
    idName: "none",
    url: "info.html",
  },
];

elementId.forEach((machine) => {
  // 追加要素の作成
  var newElement = document.createElement("li"); // リストタグ作成
  var newContent = document.createTextNode(machine.name); // 機種名をセット
  newElement.appendChild(newContent); // リストタグに機種名をセット
  newElement.setAttribute("id", machine.idName); // リストタグにidをセット

  // 作成した要素をulタグの子要素として追加し、HTMLへ書き加える
  //each文処理中にエラーが出るため、machineListが空の場合は処理を行わないように条件を追加
  if (machineList != null) {
    machineList.insertBefore(newElement, machineList.firstChild);
  }

  machine.idName = "#" + machine.idName;
  $(machine.idName).on("click", function () {
    gamePage.setAttribute("src", machine.url);
    $(machine.idName).css("color", "red");

    if (clickId != "" && clickId != machine.idName) {
      $(clickId).css("color", "");
    }
    clickId = machine.idName;
  });

  $(machine.idName).on("mouseover", function () {
    $(machine.idName).css("background-color", "lightblue");
  });
  $(machine.idName).on("mouseout", function () {
    $(machine.idName).css("background-color", "");
  });
});
