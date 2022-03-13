//防抖

const mixin = {
  data() {
    return {
      _debounceTimeout: null, //节流定时器
    };
  },
  methods: {
    //节流
    debounce(fn, delay) {
      clearTimeout(this._debounceTimeout)
      this._debounceTimeout=setTimeout(fn,delay)
    },
    throttle(fn, delay) {
      let valid = true;
      console.log("节流函数开始执行");

      if (!valid) {
        //休息时间
        console.log("节流执行");
        return false;
      }
      // 工作时间，执行函数并且在间隔期内把状态位设为无效
      valid = false;
      setTimeout(() => {
        fn();
        console.log("节流倒计时完毕");
        valid = true;
      }, delay);
    },
  },
};

export default mixin;
