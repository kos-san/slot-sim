let set = 0;
let totalGame = 0;

window.addEventListener("load", function () {
  // console.log("load：リソースファイルを全て読み込みました。");

  document.getElementById("set_1").onclick = function () {
    set = 1;
    document.getElementById("set_num").textContent = "1";
  };

  document.getElementById("set_2").onclick = function () {
    set = 2;
    document.getElementById("set_num").textContent = "2";
  };

  document.getElementById("set_3").onclick = function () {
    set = 3;
    document.getElementById("set_num").textContent = "3";
  };

  document.getElementById("set_4").onclick = function () {
    set = 4;
    document.getElementById("set_num").textContent = "4";
  };

  document.getElementById("set_5").onclick = function () {
    set = 5;
    document.getElementById("set_num").textContent = "5";
  };

  document.getElementById("set_6").onclick = function () {
    set = 6;
    document.getElementById("set_num").textContent = "6";
  };

  const form = document.getElementById("start-form");
  form.addEventListener("click", function () {
    const input_value = document.getElementById("total-game");
    input_value.addEventListener("input", () => {
      totalGame = input_value.value;
      totalGame = parseInt(totalGame);
      // console.log(totalGame > 0);
      // console.log(totalGame)
    });
  });

  document.getElementById("start").onclick = () => {
    const elementSet = [
      "bb_count",
      "reg_count",
      "bonus_sum",
      "total_medal",
      "big_pro",
      "reg_pro",
    ];

    elementSet.forEach((t) => {
      document.getElementById(`${t}`).textContent = "演算中...";
    });

    const error = document.getElementById("error");
    const hidden = [
      document.getElementById("hidden1"),
      document.getElementById("hidden2"),
      document.getElementById("hidden3"),
    ];
    const sumError = document.getElementById("sum_error");
    sumError.style = "display: none;";
    if (set > 0 && totalGame > 0) {
      document.getElementById("out-game").textContent = `${totalGame}回転`;
      error.style = "display: none;";

      // 演算

      let results = [];

      let big = [];
      const bigSet = [0, 177, 181, 178, 190, 189, 210];

      let cherryBig = [];
      const cherryBigSet = [0, 60, 61, 65, 63, 67, 68];

      let reg = [];
      const regSet = [0, 98, 115, 129, 142, 158, 181];

      let cherryReg = [];
      const cherryRegSet = [0, 43, 47, 50, 52, 52, 59];

      let middleCherryBig = [];
      const middleCherryBigSet = 20;

      let grape = [];
      const grapeSet = [0, 10288, 10288, 10370, 10452, 10553, 10639];

      let replay = [];
      const replaySet = 8978;

      let cherry = [];
      const cherrySet = 1945;

      let pielo = [];
      const pieloSet = 60;

      let bel = [];
      const belSet = 60;

      let lost = [];
      const lostSet = [0, 43807, 43781, 43681, 43574, 43454, 43316];

      // 各フラグのセッティング
      const setting = {
        big(big, bigSet, results, set) {
          let n = bigSet[set];
          for (i = 0; i < n; i++) {
            big.push("big");
            results.push("big");
          }
        },
        cherryBig(cherryBig, cherryBigSet, results, set) {
          let n = cherryBigSet[set];
          for (i = 0; i < n; i++) {
            cherryBig.push("チェリーBIG");
            results.push("チェリーBIG");
          }
        },
        reg(reg, regSet, results, set) {
          let n = regSet[set];
          for (i = 0; i < n; i++) {
            reg.push("reg");
            results.push("reg");
          }
        },
        cherryReg(cherryReg, cherryRegSet, results, set) {
          let n = cherryRegSet[set];
          for (i = 0; i < n; i++) {
            cherryReg.push("チェリーREG");
            results.push("チェリーREG");
          }
        },
        middleCherryBig(middleCherryBig, middleCherryBigSet, results) {
          let n = middleCherryBigSet;
          for (i = 0; i < n; i++) {
            middleCherryBig.push("中段チェリーBIG");
            results.push("中段チェリーBIG");
          }
        },
        grape(grape, grapeSet, results, set) {
          let n = grapeSet[set];
          for (i = 0; i < n; i++) {
            grape.push("ぶどう");
            results.push("ぶどう");
          }
        },
        replay(replay, replaySet, results) {
          let n = replaySet;
          for (i = 0; i < n; i++) {
            replay.push("リプレイ");
            results.push("リプレイ");
          }
        },
        cherry(cherry, cherrySet, results) {
          let n = cherrySet;
          for (i = 0; i < n; i++) {
            cherry.push("チェリー");
            results.push("チェリー");
          }
        },
        pielo(pielo, pieloSet, results) {
          let n = pieloSet;
          for (i = 0; i < n; i++) {
            pielo.push("ピエロ");
            results.push("ピエロ");
          }
        },
        bel(bel, belSet, results) {
          let n = belSet;
          for (i = 0; i < n; i++) {
            bel.push("ベル");
            results.push("ベル");
          }
        },
        lost(lost, lostSet, results, set) {
          let n = lostSet[set];
          for (i = 0; i < n; i++) {
            lost.push("はずれ");
            results.push("はずれ");
          }
        },
      };
      // 配列の要素をシャッフルする関数の設定
      const shuffle = (arrays) => {
        for (let i = arrays.length - 1; i >= 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = arrays[i];
          arrays[i] = arrays[j];
          arrays[j] = tmp;
        }
        return arrays;
      };

      setting.big(big, bigSet, results, set);
      setting.cherryBig(cherryBig, cherryBigSet, results, set);
      setting.reg(reg, regSet, results, set);
      setting.cherryReg(cherryReg, cherryRegSet, results, set);
      setting.middleCherryBig(middleCherryBig, middleCherryBigSet, results);
      setting.grape(grape, grapeSet, results, set);
      setting.replay(replay, replaySet, results);
      setting.cherry(cherry, cherrySet, results);
      setting.pielo(pielo, pieloSet, results);
      setting.bel(bel, belSet, results);
      setting.lost(lost, lostSet, results, set);

      results = shuffle(results);

      console.log(results);

      // フラグ作成
      let max_i = 1;
      let l = 1;
      let big_count = 0;
      let reg_count = 0;
      let jag_ren = 0;
      let medal = 0;
      let max_medal = 0;
      let min_medal = 0;
      let randomNumbers = [];
      let resultMedals = [0];

      function randomInt(num, randomNumbers) {
        var rand = Math.floor(Math.random() * num);
        randomNumbers.push(rand);
        return rand;
      }

      for (i = 1; i <= totalGame; i++) {
        medal -= 3;

        if (l > max_i) {
          max_i = l;
        }

        let randomNum = randomInt(65536, randomNumbers);
        result = results[randomNum];
        if (result === "big") {
          console.log(`${l}回転目：BIG`);
          big_count++;
          if (l <= 100) {
            jag_ren++;
          }

          l = 0;
          medal += 345;
        } else if (result === "チェリーBIG") {
          console.log(`${l}回転目：チェリーBIG`);
          big_count++;
          if (l <= 100) {
            jag_ren++;
          }
          l = 0;
          medal += 345;
        } else if (result === "中段チェリーBIG") {
          console.log(`${l}回転目：中段チェリーBIG`);
          big_count++;
          if (l <= 100) {
            jag_ren++;
          }
          l = 0;
          medal += 345;
        } else if (result === "reg") {
          console.log(`${l}回転目：REG`);
          reg_count++;

          if (l <= 100) {
            jag_ren++;
          }
          l = 0;
          medal += 105;
        } else if (result === "チェリーREG") {
          console.log(`${l}回転目：チェリーREG`);
          reg_count++;

          if (l <= 100) {
            jag_ren++;
          }
          l = 0;
          medal += 105;
        } else if (result === "replay") {
          medal += 3;
          l++;
        } else if (result === "grape") {
          medal += 7;
          l++;
        } else if (result === "cherry") {
          medal++;
          l++;
        } else if (result === "pielo") {
          medal += 10;
          l++;
        } else if (result === "bel") {
          medal += 15;
          l++;
        } else {
          l += 1;
        }
        if (medal > max_medal) {
          max_medal = medal;
        } else if (medal < min_medal) {
          min_medal = medal;
        }

        resultMedals.push(medal);
      }

      // 結果ログ
      if (big_count > 0 && reg_count > 0) {
        let big_pro = Math.floor(totalGame / big_count);
        let reg_pro = Math.floor(totalGame / reg_count);
        // 合算 = (BIG確率 * REG確率) / (BIG確率 + REG確率)
        let sum = Math.floor((big_pro * reg_pro) / (big_pro + reg_pro));

        // ブラウザーコンソールデバッグ用
        // console.log("終了");
        // console.log("----------------");
        // console.log(
        //   `設定：${set} 回転数：${totalGame} 最大ハマり回数：${max_i}回`
        // );
        // console.log(`BIG:${big_count}回 => ${big_pro}分の１`);
        // console.log(`REG:${reg_count}回 => ${reg_pro}分の１`);
        // console.log(`合算:${sum}`);

        const iAe = [big_count, reg_count, sum, medal, big_pro, reg_pro];
        let iAeNum = 0;
        hidden.forEach((hidden) => {
          hidden.style = "display:inline;";
        });

        elementSet.forEach((t) => {
          document.getElementById(t).textContent = iAe[iAeNum];
          iAeNum++;
        });
        if (medal < 0) {
          document.getElementById("total_medal").style = "color: red;";
        } else {
          document.getElementById("total_medal").style = "color: black;";
        }
      } else {
        const sumErrorMessage = "データが少なすぎるため、解析できませんでした";

        sumError.style = "display: block;";
        sumError.textContent = sumErrorMessage;
      }

      // スランプグラフ
      Highcharts.chart("container", {
        title: {
          text: "スランプグラフ",
        },

        subtitle: {
          text: "アイムジャグラーEX-AE",
        },

        yAxis: {
          title: {
            text: "差枚数",
          },
        },

        // xAxis: {
        //   accessibility: {
        //     rangeDescription: "？？？",
        //   },
        // },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "long",
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: true,
            },
            pointStart: 0,
          },
        },

        series: [
          {
            name: "コイン（枚）",
            data: resultMedals,
          },
          // {
          //   name: "Manufacturing",
          //   data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          // },
          // {
          //   name: "Sales & Distribution",
          //   data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
          // },
          // {
          //   name: "Project Development",
          //   data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
          // },
          // {
          //   name: "Other",
          //   data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
          // },
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      });
      // グラフーここまで

      // デバッグ用
      // console.log(`差枚数:${medal}枚`);
      // console.log(`ジャグ連回数: ${jag_ren}`);
      // console.log(`最大枚数；${max_medal}`);
      // console.log(`最低枚数：${min_medal}`);
      // console.log(
      //   set,
      //   big.length,
      //   cherry_big.length,
      //   reg.length,
      //   cherry_reg.length,
      //   replay.length,
      //   cherry.length,
      //   pielo.length,
      //   bel.length,
      //   grape.length
      // );
      // console.log(results);
      // console.log(randomNumbers);
      // console.log(resultMedals);

      // 演算
    } else {
      console.log("エラー");

      error.textContent = "エラー";
      error.style = "display: block;";
    }
  };
});
