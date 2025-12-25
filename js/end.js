function endFun(){
	var duration = 15000; // 设置函数执行的最大时长，这里是60秒（以毫秒为单位）
    var startTime = Date.now(); // 记录函数开始执行的时间
    var intervalId = setInterval(function() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    if (elapsedTime < duration) {
        var circle = document.createElement('div');

        circle.classList.add('circle');

        var x = Math.random() * 100 + 1;
        var y = Math.random() * 100 + 1;

        var animationTime = Math.round(Math.random() * 10);
        circle.style.setProperty(100, 10000);

        // 设置左
        circle.style.left = x + 'vw';
        // 设置右
        circle.style.top = y + 'vh';

        // 设置颜色
        circle.style.backgroundColor = randomColor();

        circle.innerText = randomText();

        // 生成
        document.body.appendChild(circle);

        // 清除
        // setTimeout(function() {
        //     document.body.removeChild(circle);
        // }, animationTime * 1000);
    } else {
        clearInterval(intervalId); // 达到最大时长后停止定时器
        
        // 生成10个'生日快乐'气泡
        for (var i = 0; i < 10; i++) {
            setTimeout(function() {
                var circle = document.createElement('div');
                circle.classList.add('circle');
                
                var x = Math.random() * 80 + 10; // 10%-90%的范围，避免边缘
                var y = Math.random() * 80 + 10;
                
                circle.style.left = x + 'vw';
                circle.style.top = y + 'vh';
                
                // 设置颜色
                circle.style.backgroundColor = randomColor();
                
                circle.innerText = '生日快乐';
                
                // 生成
                document.body.appendChild(circle);
            }, i * 200); // 每隔200ms生成一个
        }
        
        // 最后生成感谢收看的气泡
        setTimeout(function() {
            var circle = document.createElement('div');

            circle.classList.add('circle');

            var x = 50;
            var y = 50;

            circle.style.left = x + 'vw';
            circle.style.top = y + 'vh';

            // 设置颜色
            circle.style.backgroundColor ='rgb(49,213,118)';

            circle.innerText = '感谢收看（可以关网页了）';

            // 生成
            document.body.appendChild(circle);

            setTimeout(function() {
                window.close();
            }, 10000); 
        }, 2500); // 在所有生日快乐气泡生成后显示
    }
}, 500);

	
    function randomColor() {
	    const colors = [
	        '#81ecec',
	        '#74b9ff',
	        '#a29bfe',
	        '#ffeaa7',
	        '#fab1a0',
	        '#ff7675',
	        '#fd79a8',
            '#FF1493',
            '#FFDAB9',
            '#00BFFF'
	    ];
	    return colors[Math.round(Math.random() * colors.length)];
    }
	
    function randomText() {
	    const texts = [
	        '哈基樱',
	        '樱雨',
	        '琳唧唧',
	        '琳卿',
	        '圆乎乎脸',
	        '堵桥',
	        '使命召唤',
	        '三角洲',
            '长发男',
            '丰川祥子',
            '生日快乐'
	    ];
	    return texts[Math.round(Math.random() * (texts.length - 1))];
    }
}