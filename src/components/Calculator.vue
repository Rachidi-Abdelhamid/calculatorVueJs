<template>
  <div class="home">
    <div id="container">
      <div id="calculator">
        <div id="result">
          <div id="history">
            <p id="history-value" v-cloak>{{ history }}</p>
          </div>
          <div id="output">
            <p id="output-value" v-cloak>{{ result }}</p>
          </div>
        </div>
        <div id="btn">
          <button @click="C()" class="operator">C</button>
          <button @click="CE()" class="operator">CE</button>
          <button @click="operate('%')" class="operator">%</button>
          <button @click="operate('/')" class="operator">&#247;</button>
          <button @click="operate(7)" class="number">7</button>
          <button @click="operate(8)" class="number">8</button>
          <button @click="operate(9)" class="number">9</button>
          <button @click="operate('*')" class="operator">&times;</button>
          <button @click="operate(4)" class="number">4</button>
          <button @click="operate(5)" class="number">5</button>
          <button @click="operate(6)" class="number">6</button>
          <button @click="operate('-')" class="operator">-</button>
          <button @click="operate(1)" class="number">1</button>
          <button @click="operate(2)" class="number">2</button>
          <button @click="operate(3)" class="number">3</button>
          <button @click="operate('+')" class="operator">+</button>
          <button class="empty">
            <img class="img" src="../assets/logo.png" />
          </button>
          <button @click="operate(0)" class="number">0</button>
          <button class="empty">
            <img class="img" src="../assets/logo.png" />
          </button>
          <button @click="results()" class="operator">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      history: "",
      result: 0
    };
  },
  methods: {
    operate(element) {
      this.history += element;
    },
    results() {
      this.result = eval(this.history);
    },
    CE() {
      this.result = 0;
      this.history = "";
    },
    cleanAll() {
      this.history = "";
      this.result = 0;
    },
    C() {
      this.history = this.history.slice(0, -1);
    },
    toggle() {
      this.history === "" ||
      this.history.endsWith("+" || "-" || "*" || "/" || "%")
        ? {}
        : this.history.startsWith("-")
        ? (this.history = Math.abs(eval(this.history)).toString())
        : (this.history = "-(" + this.history + ")");
      this.results();
    }
  }
};
</script>
<style>
body {
  font-family: "Open Sans", sans-serif;
  background-color: black;
}
#container {
  width: 100%;
  height: 90%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  margin: 20px auto;
}
#calculator {
  width: 320px;
  height: 520px;
  background-color: #eaedef;
  margin: 0 auto;
  top: 20px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#result {
  height: 120px;
}
#history {
  text-align: right;
  height: 20px;
  margin: 0 20px;
  padding-top: 20px;
  font-size: 15px;
  color: #919191;
}
#output {
  text-align: right;
  height: 60px;
  margin: 10px 20px;
  font-size: 30px;
  background-color: #e7e7e7;
}
#btn {
  height: 400px;
}
.operator,
.number,
.empty {
  width: 50px;
  height: 50px;
  margin: 15px;
  float: left;
  border-radius: 50%;
  border-width: 0;
  font-weight: bold;
  font-size: 15px;
}
.img {
  width: 95%;
  height: 90%;
}
.number,
.empty {
  background-color: #afafaf;
}
.number,
.operator {
  cursor: pointer;
}
.operator:active,
.number:active {
  font-size: 13px;
}
.operator:focus,
.number:focus,
.empty:focus {
  outline: 0;
}
button:nth-child(1) {
  font-size: 20px;
  background-color: #ff00aa;
}
button:nth-child(2) {
  font-size: 20px;
  background-color: #d9ff00;
}
button:nth-child(3) {
  font-size: 20px;
  background-color: #ff0000;
}
button:nth-child(4) {
  font-size: 20px;
  background-color: #20b2aa;
}
button:nth-child(8) {
  font-size: 20px;
  background-color: #ffa500;
}
button:nth-child(12) {
  font-size: 20px;
  background-color: #f08080;
}
button:nth-child(16) {
  font-size: 20px;
  background-color: #7d93e0;
}
button:nth-child(20) {
  font-size: 20px;
  background-color: #9477af;
}
</style>
