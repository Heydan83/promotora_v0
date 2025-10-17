<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext('2d')!;
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
    }
  });

  function startDrawing(event: MouseEvent | TouchEvent) {
    isDrawing = true;
    const { x, y } = getEventPosition(event);
    lastX = x;
    lastY = y;
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function draw(event: MouseEvent | TouchEvent) {
    if (!isDrawing || !ctx) return;

    const { x, y } = getEventPosition(event);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
  }

  function getEventPosition(event: MouseEvent | TouchEvent) {
    if ('touches' in event) {
      // Touch event
      return {
        x: event.touches[0].clientX - canvas.getBoundingClientRect().left,
        y: event.touches[0].clientY - canvas.getBoundingClientRect().top
      };
    } else {
      // Mouse event
      return {
        x: event.clientX - canvas.getBoundingClientRect().left,
        y: event.clientY - canvas.getBoundingClientRect().top
      };
    }
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Optional: get the signature image as data URL
  function getSignature() {
    return canvas.toDataURL('image/png');
  }
</script>

<style>
  canvas {
    border: 1px solid #ccc;
    touch-action: none; /* Prevent scrolling on touch devices while drawing */
  }
  button {
    margin-top: 10px;
  }
</style>

<div>
  <canvas
    bind:this={canvas}
    width="500"
    height="200"
    on:mousedown={startDrawing}
    on:mouseup={stopDrawing}
    on:mouseout={stopDrawing}
    on:mousemove={draw}
    on:touchstart|preventDefault={startDrawing}
    on:touchend|preventDefault={stopDrawing}
    on:touchcancel|preventDefault={stopDrawing}
    on:touchmove|preventDefault={draw}
  ></canvas>

  <button on:click={clearCanvas}>Clear</button>
</div>

<!-- import SignatureCanvas from '../SignatureCanvas.svelte';
let canvasRef: SignatureCanvas | null = null;
<SignatureCanvas bind:this={canvasRef} /> -->