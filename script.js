document.addEventListener("DOMContentLoaded", function() {

    let noClickCount = 0;
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const line4 = document.getElementById("catImg");
    const buttons = document.getElementById("buttons");
    const blurryPanel = document.getElementById("blurryPanel");
    const gifContainer = document.getElementById("gifContainer");

    noButton.addEventListener("click", function() {
        noClickCount++;
        if (noClickCount === 1) {
            const gif = document.createElement("img");
            gif.src = "orange-cat-laughing.gif";
            gif.alt = "orange cat laughing";
            gifContainer.appendChild(gif);
            alert("haha you funny. I'll give you another try :)");
            setTimeout(() => {
                gifContainer.classList.add("hidden");
            }, 3000);
        } else if (noClickCount === 2) {
            
            alert("nope. Look, I'll make it easier for you :)");
            noButton.classList.add("small-button");
            yesButton.classList.add("large-button");
        } else if (noClickCount === 3) {
            alert("you're not very good at this are you? :)");
        } else if (noClickCount === 4) {
            const sad = document.createElement("img");
            sad.src = "sad_cat.jpg";
            sad.alt = "very sad cat";
            gifContainer.replaceChild(sad, gifContainer.firstChild);
            alert("I'll give you one more chance :)");
            gifContainer.classList.remove("hidden");
            setTimeout(() => {
                gifContainer.classList.add("hidden");
            }, 3000);
        } else if (noClickCount === 5) {
            const thumbsUp = document.createElement("img");
            thumbsUp.src = "thumbs_up.jpg";
            thumbsUp.alt = "thumbs up cat";
            gifContainer.replaceChild(thumbsUp, gifContainer.firstChild);
            alert("I mean... ig if you really don't wanna, you at least have a Redbull :)")
            gifContainer.classList.remove("hidden");
            buttons.classList.add("hidden");
            line4.classList.add("hidden");
            line4.style.marginTop = "-200px";
        }    
    });
    

    class Heart {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.theta = Math.random() * Math.PI * 2;
            const heartEl = document.createElement("div");
            heartEl.classList.add("heart");
            document.body.append(heartEl);
            const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];
            const color = pinks[parseInt(Math.random() * pinks.length)];
            heartEl.style.background = color;

            const heartLeftEl = document.createElement("div");
            heartLeftEl.classList.add("left");
            heartLeftEl.style.background = color; // try backgroundColor to see the difference
            heartEl.appendChild(heartLeftEl);

            const heartRightEl = document.createElement("div");
            heartRightEl.classList.add("right");
            heartRightEl.style.background = color; // try backgroundColor to see the difference
            heartEl.appendChild(heartRightEl);

            this.el = heartEl;
            this.el.style.position = 'absolute';
            this.el.style.left = `${this.x}px`;
            this.el.style.top = `${this.y}px`;

            setTimeout(() => {
                this.el.remove();
                hearts.splice(hearts.indexOf(this), 1);
            }, 10000);
        }
        update() {
            this.x += Math.cos(this.theta) * 1;
            this.y += 1;
            this.theta += 0.01;
            this.el.style.left = `${this.x}px`;
            this.el.style.top = `${this.y}px`;
        }
    }

    const hearts = [];
    let heartInterval;

    setTimeout(() => {
        line1.classList.remove("hidden");
        line1.classList.add("fade-in");
    }, 1000);

    setTimeout(() => {
        line2.classList.remove("hidden");
        line2.classList.add("fade-in");
    }, 3000);

    setTimeout(() => {
        line3.classList.remove("hidden");
        line3.classList.add("fade-in");
        line4.classList.remove("hidden");
        line4.classList.add("fade-in");
    }, 7000);


    setTimeout(() => {
        buttons.classList.remove("hidden");
        const yesButton = document.getElementById("yesButton");
        const noButton = document.getElementById("noButton");
        yesButton.classList.remove("hidden");
        noButton.classList.remove("hidden");
        yesButton.classList.add("slide-up");
        noButton.classList.add("slide-up");
    }, 9000);


    yesButton.addEventListener("click", function() {
        if (!heartInterval) {
            heartInterval = setInterval(() => {
                const heart = new Heart(Math.random() * window.innerWidth, -100);
                hearts.push(heart);
            }, 200);

            setInterval(() => {
                hearts.forEach((heart) => heart.update());
            }, 10);
        }
        line1.classList.add("hidden");
        line2.classList.add("hidden");
        line3.classList.add("hidden");
        line4.classList.add("hidden");
        buttons.classList.add("hidden");
        gifContainer.classList.add("hidden");
        blurryPanel.classList.remove("hidden");
        blurryPanel.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});