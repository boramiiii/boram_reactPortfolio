/*
performance.now()
브라우저가 로딩된 순간부터 특정 구문이 호출된 사용자의 시간을 ms단위로 반환
정밀한 시간계산이 필요할때 활용
*/


// const speed = 1000;
// let startTime = 0;
// let num = 0;
// let count = 0; //반복횟수

export default class Anime{
    constructor(el, option){
        this.el = el;
        this.option = option;
        this.startTime = performance.now();
        //현재 선택자의 스타일값 구하기

        //만약 prop의 속성명이 scroll 이라면 scrollY값을 구하고, 그렇지 않다면 기존option.value값을 실수로 반환
        this.currentValue = null;
        if(this.option.prop === 'scroll'){
            this.currentValue = window.scrollY;
        }else{
            this.currentValue = parseFloat(getComputedStyle(this.el)[this.option.prop]);
        }

        
        //속성값이 문자열이라면 %처리 위해 option.value값을 실수로 변경
        this.isStr = typeof this.option.value;
        if(this.isStr === 'string'){
            const x = ["margin-left", "margin-right", "right", "left", "width"];

            //위 x 속성을 돌면서 조건이 x의 속성명에 부합하면 
            for(let comition of x){
                if(this.option.prop === comition){
                    //해당 선택자의 직계부모 요소의 넓이값을 구해
                    const parentW = parseInt(getComputedStyle(this.el.parentElement).width);

                    //현재 위치값을 백분율로 변환한 값으로 저장
                    this.currentValue = (this.currentValue/parentW)*100
                }
            }

            //세로
            const y = ["margin-top", "margin-bottom", "top", "bottom", "height"];
            for(let comition of y){
                if(this.option.prop === comition){
                    const parentH = parseInt(getComputedStyle(this.el.parentElement).height);

                    this.currentValue = (this.currentValue/parentH)*100
                }
            }
            this.option.value = parseFloat(this.option.value);
        } 
        
        //만약 현재스타일 값과 변경될 스타일 값이 같을경우 실행중지
        if(this.option.value === this.currentValue) return;
        //requestAnimationFrame 이 prototype 에 담겨잇는 run을 화살표함수로 호출
        requestAnimationFrame((time) => this.run(time));
        }

        run(time){
            let timelast = time - this.startTime; // 반복 돌때마다의 반복 누적시간에서 버튼 클릭 시점의 시간값을 빼서 순수 누적시간을 구함
            //     num++;
            //     requestAnimationFrame(move);
            // }
            //진행률 = (현재누적시간/현재시간)
            let progress = timelast / this.option.duration;
            
            //시작부터 끝까지 진행률 고정
            if(progress < 0){
                progress = 0;
            }
            if(progress > 1){
                progress = 1;
            }
        
            //현재진행률이 1에 도달하기까지는 계속해서 강제로 반복처리
            if(progress < 1){
                requestAnimationFrame((time)=>this.run(time));
            }else{
                if(this.option.callback) this.option.callback();
            }
            // console.log(`진행률 : ${progress}/ 반복횟수:${count}`);
        
            let result = this.currentValue + (this.option.value - this.currentValue)*progress;
            //현재  option.value 값이 문자열이라면 % 아니라면 px
            if(this.isStr === 'string') this.el.style[this.option.prop] = result + "%";
            else if(this.option.prop === 'opacity') this.el.style[this.option.prop] = result;
            else if(this.option.prop === 'scroll') this.el.scroll(0, result);
            else this.el.style[this.option.prop] = result + "px";
        }
}



// function anime(el, option){
//     const startTime = performance.now();
//     //현재 선택자의 스타일값 구하기

//     //만약 prop의 속성명이 scroll 이라면 scrollY값을 구하고, 그렇지 않다면 기존option.value값을 실수로 반환
//     let currentValue = null;
//     if(option.prop === 'scroll'){
//         currentValue = window.scrollY;
//     }else{
//         currentValue = parseFloat(getComputedStyle(el)[option.prop]);
//     }

    
//     //속성값이 문자열이라면 %처리 위해 option.value값을 실수로 변경
//     const isStr = typeof option.value;
//     if(isStr === 'string'){
//         const x = ["margin-left", "margin-right", "right", "left", "width"];

//         //위 x 속성을 돌면서 조건이 x의 속성명에 부합하면 
//         for(let comition of x){
//             if(option.prop === comition){
//                 //해당 선택자의 직계부모 요소의 넓이값을 구해
//                 const parentW = parseInt(getComputedStyle(el.parentElement).width);

//                 //현재 위치값을 백분율로 변환한 값으로 저장
//                 currentValue = (currentValue/parentW)*100
//             }
//         }

//         //세로
//         const y = ["margin-top", "margin-bottom", "top", "bottom", "height"];
//         for(let comition of y){
//             if(option.prop === comition){
//                 const parentH = parseInt(getComputedStyle(el.parentElement).height);

//                 currentValue = (currentValue/parentH)*100
//             }
//         }
//         console.log(currentValue);
//         option.value = parseFloat(option.value);
//     } 
    
//     //만약 현재스타일 값과 변경될 스타일 값이 같을경우 실행중지
//     if(option.value === currentValue) return;
//     requestAnimationFrame(run);
    
//     function run(time){
//         let timelast = time - startTime; // 반복 돌때마다의 반복 누적시간에서 버튼 클릭 시점의 시간값을 빼서 순수 누적시간을 구함
//         //     num++;
//         //     requestAnimationFrame(move);
//         // }
//         //진행률 = (현재누적시간/현재시간)
//         let progress = timelast / option.duration;
        
//         //시작부터 끝까지 진행률 고정
//         if(progress < 0){
//             progress = 0;
//         }
//         if(progress > 1){
//             progress = 1;
//         }
    
//         //현재진행률이 1에 도달하기까지는 계속해서 강제로 반복처리
//         if(progress < 1){
//             requestAnimationFrame(run);
//         }else{
//             if(option.callback) option.callback();
//         }
//         // console.log(`진행률 : ${progress}/ 반복횟수:${count}`);
    
//         let result = currentValue + (option.value - currentValue)*progress;
//         //현재  option.value 값이 문자열이라면 % 아니라면 px
//         if(isStr === 'string') el.style[option.prop] = result + "%";
//         else if(option.prop === 'opacity') el.style[option.prop] = result;
//         else if(option.prop === 'scroll') el.scroll(0, result);
//         else el.style[option.prop] = result + "px";
//     }
    
// }
