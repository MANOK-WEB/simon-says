<!DOCTYPE html>
<html lang="en">
<head>

    <!--title Simon say game title-->
    <title>Simon Say Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Simon Say Game</h1>
    <h2>Press start to begin the game.</h2>

    <!-- START BUTTON -->
    <button id="start-btn">Start</button>
    <div class="high-score">High Score : 0</div>

    <div class="btn_container">
        <div class="line-1">
            <div class="btn red" type="button" id="red">red</div>
            <div class="btn yellow" type="button" id="yellow">yellow</div>
        </div>

        <div class="line-2">
            <div class="btn green" type="button" id="green">green</div>
            <div class="btn purple" type="button" id="purple">purple</div>
        </div>
    </div>

    <h3></h3>

    <script src="script.js"></script>
</body>
</html>
