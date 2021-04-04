// Design Underground System

// An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

// Implement the UndergroundSystem class:

// void checkIn(int id, string stationName, int t)
//   - A customer with a card ID equal to id, checks in at the station stationName at time t.
//   - A customer can only be checked into one place at a time.
// void checkOut(int id, string stationName, int t)
//   - A customer with a card ID equal to id, checks out from the station stationName at time t.
// double getAverageTime(string startStation, string endStation)
//   - Returns the average time it takes to travel from startStation to endStation.
//   - The average time is computed from all the previous traveling times from startStation to endStation that happened directly, meaning a check in at startStation followed by a check out from endStation.
//   - The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.
//   - There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.
// You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order.

// Example:
// Input
// ["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
// [[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

// Output
// [null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

// Explanation
// UndergroundSystem undergroundSystem = new UndergroundSystem();
// undergroundSystem.checkIn(45, "Leyton", 3);
// undergroundSystem.checkIn(32, "Paradise", 8);
// undergroundSystem.checkIn(27, "Leyton", 10);
// undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
// undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
// undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
// undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
// undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
// undergroundSystem.checkIn(10, "Leyton", 24);
// undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000
// undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
// undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12

// 지하철 구간별 평균을 도출하는 문제

var UndergroundSystem = function () {
  this.customers = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.customers.set(id, { start: stationName, startTime: t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let customerInfo;
  if (this.customers.has(id)) {
    customerInfo = this.customers.get(id);
  }
  this.customers.set(id, { ...customerInfo, end: stationName, endTime: t });
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const travelTime = [];
  const customerInfos = this.customers;
  customerInfos.forEach((customerInfo) => {
    const values = Object.values(customerInfo);
    if (values.includes(startStation) && values.includes(endStation)) {
      travelTime.push(customerInfo.endTime - customerInfo.startTime);
    }
  });
  return travelTime.reduce((acc, cur) => acc + cur) / travelTime.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

// 승객에 대한 데이터를 Map으로 만들고 구간을 찾아서 평균값을 구하라고 만들었음
// 로직상 문제 없다고 생각했는데 막상 돌려보니 이슈가 있음, 근데 이슈가 추적하기 어려울 정도로 많은 데이터가 들어올때 발생하여 체크하기 어려움

var UndergroundSystem = function () {
  this.avg = new Map();
  this.train = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, start, t) {
  this.train.set(id, [start, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, end, t) {
  const [start, s] = this.train.get(id);
  const key = [start, end].join();
  if (this.avg.has(key)) {
    let [avg, cnt] = this.avg.get(key);
    this.avg.set(key, [avg * (cnt / ++cnt) + (t - s) / cnt, cnt]);
  } else {
    this.avg.set(key, [t - s, 1]);
  }
  this.train.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (start, end) {
  return this.avg.get([start, end].join())[0];
};

// 통과되는 discuss 답안, checkout에서 이미 계산이 끝나있음. 내가 풀이한 건 getAverageTime에서 로직에 문제가 있는것 같음
