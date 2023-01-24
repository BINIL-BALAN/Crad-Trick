class CardTrick {
    allSymbols = new Array()
    count =0
    j = 0
    row1 = new Array()
    row2 = new Array()
    row3 = new Array()
    cards = document.querySelectorAll('[card]')
    resultDisplayBody = document.querySelector(".display")
    previousDisplayBody = document.querySelector(".display").innerHTML
    resultDisplayHead = document.querySelector(".modalhead")
    previousDisplayHead = document.querySelector(".modalhead").innerHTML
    constructor() {
        this.allSymbols = cardarray
        this.row1 = this.allSymbols.slice(0, 9)
        this.row2 = this.allSymbols.slice(9, 18)
        this.row3 = this.allSymbols.slice(18)
    }

    rotate() {
        this.addCardClass()
        setTimeout(() => {
            this.appendRotationClass()
        }, 1500)
        this.cards.forEach((card) => {
            card.style.transform = 'rotateY(180deg)'
        })
    }

    addCardClass() {
        this.cards.forEach((card) => {
            card.classList.remove('card1')
            card.classList.add('card')
        })
    }

    appendRotationClass() {
        this.cards.forEach((card) => {
            card.classList.remove('card')
            card.classList.add('card1')
        })
    }

    shuffle(choice) {
        this.count++
        this.resetModal()
        switch (choice) {
            case 1: this.shuffleTypeOne()
                break;
            case 2: this.shuffleTypeTwo()
                break;
            case 3: this.shuffleTypeThree()
                break;

        }
        this.displayResult()
    }
    resetModal() {
        this.resultDisplayBody.innerHTML = this.previousDisplayBody
        this.resultDisplayHead.innerHTML = this.previousDisplayHead
    }
    displayResult() {
        if (trick.count == 3) {
            this.resultDisplayBody.innerHTML = `<div class="result">  
        <div card class="result-card"><div class="front">
        <div class="upper"><strong>1</strong></div><div class="middle"><strong>hai</strong></div>
        <div class="lower"><strong>1</strong></div></div><div class="back"> </div>
        </div> </div>`
            this.resultDisplayHead.innerHTML = 'Your card is'
            this.count = 0
        }
    }

    displaySymbols() {
        let i = 0;
        document.querySelectorAll(".back").forEach((back) => {
            back.style.color = this.allSymbols[i].color
            back.innerHTML = `<div class="upper">${this.allSymbols[i].number}</div>
                            <div class="middle">${this.allSymbols[i].symbol}</div>
                            <div class="lower">${this.allSymbols[i].number}</div>`
            i++
        })
    }

    splitArrayOne() {
        this.j = 0
        for (let i = 0; i < 27; i += 3) {
            this.row1[this.j] = this.allSymbols[i]
            this.j++
        }

    }
    splitArrayTwo() {
        this.j = 0
        for (let i = 1; i < 27; i += 3) {
            this.row2[this.j] = this.allSymbols[i]
            this.j++
        }

    }
    splitArrayThree() {
        this.j = 0
        for (let i = 2; i < 27; i += 3) {
            this.row2[this.j] = this.allSymbols[i]
            this.j++
        }

    }

    shuffleTypeOne() {
        this.allSymbols = []
        this.allSymbols.concat(this.row2, this.row1, this.row3)
        this.splitArrayOne()
        this.splitArrayTwo()
        this.splitArrayThree()
    }
    shuffleTypeTwo() {
        this.allSymbols = []
        this.allSymbols.concat(this.row1, this.row2, this.row3)
        this.splitArrayOne()
        this.splitArrayTwo()
        this.splitArrayThree()
    }
    shuffleTypeThree() {
        this.allSymbols = []
        this.allSymbols.concat(this.row1, this.row3, this.row2)
        this.splitArrayOne()
        this.splitArrayTwo()
        this.splitArrayThree()
    }
}


const trick = new CardTrick
function start() {
    trick.rotate()
    trick.displaySymbols() 
}
function rotateCard(choice) {
    trick.rotate()
    trick.shuffle(choice)
}

