    const Game = document.onload = theGame()

        function theGame(){
            //Crée les élement
        const gameBoard = document.createElement('div');
        gameBoard.id = "gameboard";
        const info = document.createElement('p');
        info.id = "info";
        const startCells = [
            "","","","","","","","","",
        ];
        let ScorecircleWins = 0;
        let ScorecrossWins = 0;



        const restartBtn = document.createElement('button');
        restartBtn.id = 'restart';
        restartBtn.innerHTML = 'Nouvelle Partie';
        restartBtn.style.marginTop = "10px"
        const modeBtn = document.getElementById('Ia');
        const snakBar = document.createElement("div");
        snakBar.id = "snackbar";
        const video = document.createElement('video');
        video.src = 'your_video_url.mp4';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.style.position = 'fixed';
        video.style.top = 0;
        video.style.left = 0;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.zIndex = '-1';
        video.src = 'CHROMA GALAXIES HDR EXPERIMENTAL MACRO SHORT FILM SHOT IN 8K.mp4';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.style.position = 'fixed';
        video.style.top = 0;
        video.style.left = 0;
        video.style.width = '100%';
        video.style.height = 'auto';
        video.style.zIndex = '-1';
        video.setAttribute("disablePictureInPicture" , "") 
        //Information pour les Joueurs
        const Container = document.createElement('div')
        Container.id = "Container"
        
        const soundEffect = new Audio('mixkit-game-ball-tap-2073.wav');
        soundEffect.preload = 'auto';
        const soundEffect2 = new Audio('mixkit-select-click-1109.wav');
        soundEffect2.preload = 'auto';
        const winMusic = new Audio('Victory! (Trainer)[Pokémon Diamond & Pearl].mp3');
        winMusic.preload = 'auto'
        const winMusic2 = new Audio('Victory! (Trainer)[Pokémon Black & White].mp3');
        winMusic2.preload = 'auto'
        const drawMusic = new Audio('Lake Verity Remastered ► Pokémon Brilliant Diamond & Shining Pearl.mp3');
        drawMusic.preload = 'auto'
        const Score = document.createElement('div');
        Score.id = "Score";
        const circleScore = document.createElement('div');
        circleScore.id = 'circle-score';
        circleScore.innerHTML = "Cercle " + ScorecircleWins;
        const crossScore = document.createElement('div');
        crossScore.id = 'cross-score';
        crossScore.innerHTML = "Croix " + ScorecrossWins;
        //test



const soundButton = document.getElementById("Sound");
soundButton.addEventListener('click', toggleSound);

const videoButton = document.getElementById('Video');
videoButton.addEventListener('click', toggleVideo);

const buttonContainer = document.createElement('div');


        //fin de test
        //Background Video
        document.body.appendChild(Container);
        //Affichage des élément
        document.body.appendChild(video);
        const body = document.body;
        Container.appendChild(Score)
        Container.appendChild(info)
        Container.appendChild(gameBoard);
        Container.appendChild(restartBtn)
        document.body.appendChild(buttonContainer);
        Score.appendChild(circleScore);
        Score.appendChild(crossScore);

        const infoDisplays = document.getElementById('info');
        infoDisplays.innerHTML = "Cercles Commence"

        //Function Jeux
        const gameBoards =  document.getElementById("gameboard");
        

        //Tableu du jeux
        function createBoard(){
            startCells.forEach((_cell,index ) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('square');
                cellElement.id = index ;
                cellElement.addEventListener('click', addGo)
                gameBoards.appendChild(cellElement);
                });
        }


        createBoard()
        let go = "circle"
        
        let gameMode = "pvp"

        let Change = document.getElementById("btnChange");
        Change.addEventListener('mouseenter',changeBtn);
        Change.addEventListener('mouseleave',changeBtnv2);
        function changeBtn(){
            if(Change.innerHTML = '<i class="fa-solid fa-gear" style="color: #000000;"></i>'){
                Change.innerHTML = '<i class="fa-solid fa-gear fa-spin" style="color: #000000;"></i>'
            }
        }
        function changeBtnv2(){
            if(Change.innerHTML = '<i class="fa-solid fa-gear fa-spin" style="color: #000000;"></i>' ){
                Change.innerHTML = '<i class="fa-solid fa-gear" style="color: #000000;"></i>'
                
            }
        }

        const Show = document.getElementById("Show")
        Show.addEventListener("click", showScore);
        function showScore(){
            console.log("Coucou");
            const Score = document.getElementById("Score");
            if(Score.style.display == "none"){
                Score.style.display = "flex"
            }else{
                Score.style.display = "none"
            }
        }



        function addGo(e){
            if (gameMode === "pvp") {
                const goDisplay = document.createElement('div');
                goDisplay.classList.add(go);
                goDisplay.classList.add(go === "circle" ? 'slide' : 'spin'); // add appropriate class for animation
                e.target.append(goDisplay);
                go = go === "circle" ? "cross" : "circle";
                infoDisplays.textContent = "C'est le tour de " + go;
                e.target.removeEventListener("click" , addGo);
                checkScore();
                console.log(go);
                //Efet Sonor Pour Chaque Joueur
                if(go === "circle"){
                    soundEffect.play()
                    
                }else{
                    soundEffect2.play()
                }
                // Change l'effet sonor
                setTimeout(() => {
                    goDisplay.classList.remove(go === "circle" ? 'slide' : 'spin'); // remove animation class after animation is complete
                }, 500);
            } else if (gameMode === "pvc") {
            // player vs computer mode
            go = "circle";
            const playerPiece = go;
            const playerDisplay = document.createElement('div');
            playerDisplay.classList.add(playerPiece);
            e.target.append(playerDisplay);
            e.target.removeEventListener("click", addGo);
            go = playerPiece;
            infoDisplays.textContent = "C'est le tour de l'ordinateur";
            checkScore();
            setTimeout(computerPlay, 100);
            }
        }


        function computerPlay() {
            const allSquares = document.querySelectorAll(".square");
            const emptySquares = Array.from(allSquares).filter(square => !square.firstChild);

            if (emptySquares.length === 0 ) {
            // no empty squares remaining, game is over
            return;
            }

            const randomIndex = Math.floor(Math.random() * emptySquares.length);
            const chosenSquare = emptySquares[randomIndex];
            const computerPiece = go === "circle" ? "cross" : "circle";

            const computerDisplay = document.createElement('div');
            computerDisplay.classList.add(computerPiece);
            chosenSquare.append(computerDisplay);
            chosenSquare.removeEventListener("click", addGo);
            go = computerPiece;
            infoDisplays.textContent = "C'est le tour de " + go;
            checkScore();
        }


        function checkScore() {
            const allSquares = document.querySelectorAll(".square");
            const winningCombos = [
                [0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]
            ];
        
            let isDraw = true;
        
            winningCombos.forEach(array => {
                const circleWins = array.every(cell =>
                    allSquares[cell].firstChild?.classList.contains('circle'));
        
                if (circleWins) {
                    infoDisplays.textContent = "Circle Gagne!";
                    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
                    isDraw = false;
                    winMusic.play();
                    ScorecircleWins++;
                    circleScore.innerHTML = "Cercle " + ScorecircleWins;
                    return;
                }
            });
        
            if (isDraw && [...allSquares].every(square => square.firstChild)) {
                infoDisplays.textContent = "Égalité!";
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
                drawMusic.play();
                return;
            }
        
            winningCombos.forEach(array => {
                const crossWins = array.every(cell =>
                    allSquares[cell].firstChild?.classList.contains('cross'));
        
                if (crossWins) {
                    infoDisplays.textContent = "Croix Gagne!";
                    allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
                    winMusic2.play();
                    ScorecrossWins++;
                    crossScore.innerHTML = "Croix " +ScorecrossWins;
                    console.log(ScorecrossWins);
                    return;
                }
            });

        }
        
        function restartGame() {

        const allSquares = document.querySelectorAll(".square");
        allSquares.forEach(square => {
            square.innerHTML = "";
            square.addEventListener("click", addGo);
            winMusic.currentTime = 0
            winMusic.pause();
            winMusic2.currentTime = 0
            winMusic2.pause();
            drawMusic.currentTime = 0
            drawMusic.pause();
        });

        go = "circle";
        infoDisplays.textContent = "Cercles Commence";
        }
        restartBtn.addEventListener("click", restartGame);
        let Restart = document.getElementById('Restart');
        Restart.addEventListener('click' , resetGame);

        modeBtn.addEventListener("click", chooseGameMode);
        function chooseGameMode() {
            const playAgainstPlayer = confirm("Voulez-vous jouer contre un autre joueur? Sinon, vous jouerez contre l’ordinateur.");
        
            if (playAgainstPlayer) {
                gameMode = "pvp";
                ScorecircleWins = 0
                ScorecrossWins = 0
            } else {
                gameMode = "pvc";
                ScorecircleWins = 0
                ScorecrossWins = 0
                
            }
        
            // reset the game with the new game mode
            restartGame();
        }


        function resetGame() {
            const allSquares = document.querySelectorAll(".square");
            allSquares.forEach(square => {
                square.innerHTML = "";
                square.addEventListener("click", addGo);
                winMusic.currentTime = 0
                winMusic.pause();
                winMusic2.currentTime = 0
                winMusic2.pause();
                drawMusic.currentTime = 0
                drawMusic.pause();
                ScorecircleWins = 0
                ScorecrossWins = 0
                circleScore.innerHTML = 0;
                crossScore.innerHTML = 0;
            });
    
            go = "circle";
            infoDisplays.textContent = "Cercles Commence";
        }
        
        let soundMuted = true;

    function toggleSound() {
    if (soundMuted) {
        soundEffect.muted = false;
        soundEffect2.muted = false;
        winMusic.muted = false;
        winMusic2.muted = false;
        drawMusic.muted = false;
        soundMuted = false;
        soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
        console.log(soundMuted);
    } else {
        soundEffect.muted = true;
        soundEffect2.muted = true;
        winMusic.muted = true;
        winMusic2.muted = true;
        drawMusic.muted = true;
        soundMuted = true;
        console.log(soundMuted);
        soundButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'
    }
    }

    let videoPaused = false;

    function toggleVideo() {
    if (videoPaused) {
        video.play();
        videoPaused = false;
        videoButton.innerHTML = '<i class="fa-solid fa-play"></i>'
    } else {
        video.pause();
        videoPaused = true;
        videoButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
    }

    }
        