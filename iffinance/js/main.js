function openModal() {
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function closeModal() {
    const modal = document.querySelector(".modal")
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
        <div class="stock">

            <div class="head">
                <h1>${ticker}</h1>
                <h1>|</h1>
                <h1>${bolsa}</h1>
            </div>
            <div class="icon">
                <img src="/iffinance/img/arrow-up.svg" style="height: 40px;" alt="ícone de seta pra cima">
                <h1> U$${valor}</h1>
            </div>
            <p>Quantidade: 31</p>
            <p>Nº de ativos:${ativos}</p>
            <p>Posição: U$${total} </p>
        </div>
    `

    const cards = document.querySelector(".container")

    cards.innerHTML += card

    console.log(cards)

    closeModal()

}