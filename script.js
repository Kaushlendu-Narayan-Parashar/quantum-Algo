document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("graphCanvas");
    const ctx = canvas.getContext("2d");

    // Sample data points for the graph
    const data = [10, 20, 15, 25, 30, 18, 22];
    const maxData = Math.max(...data);
    const graphHeight = canvas.height - 20;

    
    // Draw graph
    ctx.beginPath();
    ctx.moveTo(20, graphHeight - (data[0] / maxData) * graphHeight);
    data.forEach((point, index) => {
        const x = 20 + (index * (canvas.width - 40)) / (data.length - 1);
        const y = graphHeight - (point / maxData) * graphHeight;
        ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "#2c3e50";
    ctx.lineWidth = 2;
    ctx.stroke();
});
