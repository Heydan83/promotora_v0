<script lang="ts">
    interface Day {
        day?: number;
    }

    let { day }: Day = $props();
    let dayClass: string = $derived(day ? 'day' : 'empty-day');
</script>

<div class={dayClass}>{day}</div>

<style>
    .empty-day {
        height: calc(5vh + 15px);
		border-radius: 10px;
		text-align: center;
    }

    .day {
		background-color: var(--bg-grey-light-color);
		height: calc(5vh + 15px);
		border-radius: 10px;
		text-align: center;
	}
</style>