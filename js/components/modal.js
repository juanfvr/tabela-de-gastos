export const ModalErro = (erro) => {
    const div = document.createElement('div');
    div.classList.add("flex", "justify-center", "items-center", "absolute", "bg-black/60", "top-0", "w-full", "h-full");

    const modal = `
      <div class="flex flex-col bg-zinc-900 w-96 h-52 p-4 rounded-lg">
        <div class="flex flex-col gap-8">
          <h1 class="text-xl font-semibold">Erro no formulário</h1>
          <p class="text-lg">${erro}, tente novamente.</p>
        </div>
        <div class="flex h-full justify-end items-end">
          <button type="button" onclick="fecharModal()" class="w-32 transition-all ease-in-out duration-300 bg-blue-900 hover:bg-blue-900/50 p-2 rounded-lg font-semibold">Continuar</button>
        </div>
      </div>
    `;

    div.innerHTML = modal;

    function fecharModal() {
        div.classList.toggle('hidden');
    }

    window.fecharModal = fecharModal;

    const body = document.querySelector('body');
    body.append(div);
}