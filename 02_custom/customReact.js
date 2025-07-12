function customRender(reactElement, container)
{
    const ele = document.createElement(reactElement.type);
    for (const prop in reactElement.props) {
        if(prop === 'children')continue;
        ele.setAttribute(prop , reactElement.props[prop]);
    }
    // ele.setAttribute('target' , reactElement.props.target);
    ele.innerHTML = reactElement.children;
    container.appendChild(ele);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)