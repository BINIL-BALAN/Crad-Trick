class CardTrick {
    allSymbols = new Array()
    showingSymbols= new Array()
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
        this.showingSymbols=this.allSymbols
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
            this.displaySymbols()
                break;
            case 2: this.shuffleTypeTwo()
            this.displaySymbols()
                break;
            case 3: this.shuffleTypeThree()
            this.displaySymbols()
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
            <div card class="result-card"><div class="front" style="color:${this.showingSymbols[13].color};">
            <div class="upper"><strong>${this.showingSymbols[13].number}</strong></div>
            <div class="middle"><strong>${this.showingSymbols[13].symbol}</strong></div>
            <div class="lower"><strong>${this.showingSymbols[13].number}</strong></div></div><div class="back"> </div>
            </div> </div>`
            this.resultDisplayHead.innerHTML = 'Your card is'
            document.getElementById('chooseRowBtn').innerText="Retry"
            document.querySelector('.closeBtn-area').innerHTML=`<button type="button" data-bs-dismiss="modal" id="chooseRowBtn" class="btn btn-secondary" onclick="window.location.reload()">Retry</button>`
            this.count = 0
        }
    }

    displaySymbols() {
        let i = 0;
        console.log('inside display function',this.allSymbols);
        document.querySelectorAll(".back").forEach((back) => {
            back.style.color = this.showingSymbols[i].color
            back.innerHTML = `<div class="upper">${this.showingSymbols[i].number}</div>
                            <div class="middle">${this.showingSymbols[i].symbol}</div>
                            <div class="lower">${this.showingSymbols[i].number}</div>`
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
            this.row3[this.j] = this.allSymbols[i]
            this.j++
        }
    }

    shuffleTypeOne() {
        this.allSymbols = []
        this.allSymbols = this.allSymbols.concat(this.row2, this.row1, this.row3)
        this.splitArrayOne()
        this.splitArrayTwo()
        this.splitArrayThree()
        this.showingSymbols=[]
        this.showingSymbols=this.showingSymbols.concat(this.row1, this.row2, this.row3);
        // console.log('inside shufle type 1',this.row1, this.row2, this.row3);
    }
    shuffleTypeTwo() {
        this.allSymbols = []
        this.allSymbols = this.allSymbols.concat(this.row1, this.row2, this.row3)
        this.splitArrayOne()
        this.splitArrayTwo()
        this.splitArrayThree()
        this.showingSymbols=[]
        this.showingSymbols=this.showingSymbols.concat(this.row1, this.row2, this.row3);
    }
    shuffleTypeThree() {
        this.allSymbols = []
        this.allSymbols = this.allSymbols.concat(this.row1, this.row3, this.row2)
        this.splitArrayOne()
        this.splitArrayTwo()
        this.splitArrayThree()
        this.showingSymbols=[]
        this.showingSymbols=this.showingSymbols.concat(this.row1, this.row2, this.row3);
        // console.log('inside shufle type 1',this.row1, this.row2, this.row3);
    }
}

let trick 
function start() {
    trick = new CardTrick()
    trick.rotate()
    trick.displaySymbols()
    setTimeout(() => {
        const toastLiveExample = document.getElementById('liveToast')
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show() 
    }, 3000);
    
}

function rotateCard(choice) {
    trick.rotate()
    trick.shuffle(choice)
}

function showBUttons(){
    document.getElementById('firstRowButton').innerHTML=` <button type="button" class="btn btn-primary h-25" data-bs-toggle="modal" data-bs-target="#exampleModal2"
    onclick="rotateCard(1)">In this</button>`
    document.getElementById('secondRowButton').innerHTML=`<button type="button" class="btn btn-primary h-25" data-bs-toggle="modal" data-bs-target="#exampleModal2"
    onclick="rotateCard(2)">In this</button>`
    document.getElementById('thirdRowButton').innerHTML=`<button type="button" class="btn btn-primary h-25" data-bs-toggle="modal" data-bs-target="#exampleModal2"
    onclick="rotateCard(3)">In this </button>`
}
