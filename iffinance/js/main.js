function openModal(modalId) {
    const modal = document.querySelector(modalId)
    modal.style.display = "flex"
}

function closeModal(modalId) {
    const modal = document.querySelector(modalId)
    modal.style.display = "none"
}

function addTicker(event) {
    event.preventDefault()

    const ticker = event.target.ticker.value
    const bolsa = event.target.bolsa.value
    const valor = event.target.valor.value
    const ativos = event.target.ativos.value

    const total = valor * ativos

    const card = `
    <div class="stock" id="${ticker}" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
        <div class="head">
             <h1>${ticker}</h1>
            <h1>|</h1>
            <h1>${bolsa}</h1>
        </div>
        <div class="price">
            <div class="icon">
                <img src="img/arrow-up.svg" style="height: 40px;" alt="ícone de seta pra cima">
            </div>
                <span><h1> U$${valor}</h1></span>
            </div>
            <p>Nº de ativos: <span>${ativos}</span></p>
            <p>Total: U$<span>${total}</span></p>
            <div class="buttons">
                <button style="background-color: #5db148ff;" type="button" id="cancelar" onclick="">Editar</button>
                <button type="button" id="cancelar" onclick="deleteCard(event)">Excluir</button>
            </div>
        </div>
    </div>
    `
    const cards = document.querySelector(".container")
    cards.innerHTML += card

    event.target.reset()

    closeModal('#add')
}

function editTicker(event) {
    event.preventDefault()

    const idcard = event.target.idcard.value
    const ticker = event.target.editticker.value
    const bolsa = event.target.editbolsa.value
    const valor = event.target.editvalor.value
    const ativos = event.target.editativos.value

    const total = valor * ativos

    const cardStockEdit = document.getElementById(idcard)
    console.log(cardStockEdit)

    const h2ticker = cardStockEdit.querySelector('header h2')
    h2ticker.innerText = ticker

    const h3bolsa = cardStockEdit.querySelector('header h3')
    h3bolsa.innerText = bolsa

    const spanValor = cardStockEdit.querySelector('main span')
    spanValor.innerText = valor

    const spanAtivos = cardStockEdit.querySelector('footer span span')
    spanAtivos.innerText = ativos

    const spanTotal = cardStockEdit.querySelector('footer span.total span')
    spanTotal.innerText = total


    //Todo

    closeModal('#edit')
}

function showButtons(event) {
    const cardStock = event.target
    const buttons = cardStock.querySelector(".buttons")
    buttons.style.display = "flex"
}

function hideButtons(event) {
    const cardStock = event.target
    const buttons = cardStock.querySelector(".buttons")
    buttons.style.display = "none"
}

function deleteCard(event) {
    const buttonDelete = event.target
    const cardStock = buttonDelete.closest(".stock")
    cardStock.remove()
}

function openEditCard(event) {
    const buttonEdit = event.target
    const cardStock = buttonEdit.closest(".stock")

    const ticker = cardStock.querySelector('header h2').innerText
    const inputEditTicker = document.getElementById('editticker')
    inputEditTicker.value = ticker

    const inputIdCard = document.getElementById('idcard')
    inputIdCard.value = ticker

    const bolsa = cardStock.querySelector('header h3').innerText
    const selectEditBolsa = document.getElementById('editbolsa')
    selectEditBolsa.value = bolsa

    const valor = cardStock.querySelector('main span span').innerText
    const inputEditValor = document.getElementById('editvalor')
    inputEditValor.value = valor

    const ativos = cardStock.querySelector('footer span span').innerText
    const inputEditAtivos = document.getElementById('editativos')
    inputEditAtivos.value = ativos

    openModal('#edit')
}