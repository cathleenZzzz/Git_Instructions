document.addEventListener('mousemove', function(event) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${event.pageX - 10}px`;
    circle.style.top = `${event.pageY - 10}px`;
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 1000);
});

const style = document.createElement('style');
style.innerHTML = `
    .circle {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #4caf50;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
    }
`;
document.head.appendChild(style);
