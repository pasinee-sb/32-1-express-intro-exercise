const express = require("express");
const ExpressError = require("./expressError");
const { mean, mode, median } = require("./calc");

const app = express();

app.get("/mean", function (req, res, next) {
  try {
    const numsStr = req.query.nums;
    const path = req.path.slice(1);

    if (!numsStr) {
      throw new ExpressError("nums are required", 400);
    }

    const numArr = numsStr.split(",");

    const nonNums = numArr.filter((num) => isNaN(num));

    if (nonNums.length > 0) {
      throw new ExpressError(`${nonNums} is/are not number(s)`, 404);
    } else {
      let toNums = numArr.map(Number);

      let meanNum = mean(toNums);

      return res.json({ operation: path, value: meanNum });
    }
  } catch (err) {
    next(err);
  }
});

app.get("/mode", function (req, res, next) {
  try {
    const numsStr = req.query.nums;
    const path = req.path.slice(1);

    if (!numsStr) {
      throw new ExpressError("nums are required", 400);
    }

    const numArr = numsStr.split(",");

    const nonNums = numArr.filter((num) => isNaN(num));

    if (nonNums.length > 0) {
      throw new ExpressError(`${nonNums} is/are not number(s)`, 404);
    } else {
      let toNums = numArr.map(Number);

      let modeNum = mode(toNums);

      return res.json({ operation: path, value: modeNum });
    }
  } catch (err) {
    next(err);
  }
});

app.get("/median", function (req, res, next) {
  try {
    const numsStr = req.query.nums;
    const path = req.path.slice(1);

    if (!numsStr) {
      throw new ExpressError("nums are required", 400);
    }

    const numArr = numsStr.split(",");

    const nonNums = numArr.filter((num) => isNaN(num));

    if (nonNums.length > 0) {
      throw new ExpressError(`${nonNums} is/are not number(s)`, 404);
    } else {
      let toNums = numArr.map(Number);

      let medianNum = median(toNums);

      return res.json({ operation: path, value: medianNum });
    }
  } catch (err) {
    next(err);
  }
});

app.use(function (err, req, res, next) {
  let status = err.status || 500;
  let message = err.msg;

  return res.status(status).json({ error: { message, status } });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
