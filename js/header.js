export function header(isMainPage = false) {
    const path = isMainPage ? './' : '../';
    document.body.insertAdjacentHTML('afterbegin',`<header class="main-header">
        <nav>
            <a href="${path}">Main</a>
            <a href="${path}cards/">Cards</a>
            <a href="${path}darzas/">Darzas</a>
            <a href="${path}plus-1/">Plus 1</a>
            <a href="${path}spalvos/">Spalvos</a>
            <a href="${path}add-block/">Add block</a>
            <a href="${path}add-todo/">Add todo</a>
            <a href="${path}todo/">Todo</a>
            <a href="${path}todo-better/">Todo better</a>
            <a href="${path}krepsinis/">Krepsinis</a>
        </nav>
    </header>`);
    
}