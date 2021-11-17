const object = {
  qNum: 1,
  aNum: 1
}
const object1 = {
  qNum: 3,
  aNum: 2
}
const object2 = {
  qNum: 2,
  aNum: 3
}
const arr = [object, object1, object2]


//console.log(arr);
const item = {
  qNum: 100,
  aNum: 100
}

findItem(2, arr, item)

function findItem(questNum, args, item) {

  for (i = 0; i < args.length; i++) {
    console.log(args[i])
    if (args[i].qNum === questNum) {
      args.splice(i, 1)
      i = 0
    }
  }
  args.push(item)
  console.log(args)
}