<script lang="ts">
	import type { DayMap, DayName } from '$lib/types/types';
	import CalendarDay from './CalendarDay.svelte';

	interface CalendarDays {
		year: number;
		month: number;
	}

	let { year, month }: CalendarDays = $props();

	const date = $derived(new Date(year, month - 1));
	const lastDate = $derived(new Date(year, month, 0));
	const days: DayMap = new Map<number, DayName>([
		[1, 'Lunes' as DayName],
		[2, 'Martes' as DayName],
		[3, 'Miercoles' as DayName],
		[4, 'Jueves' as DayName],
		[5, 'Viernes' as DayName],
		[6, 'Sabado' as DayName],
		[7, 'Domingo' as DayName]
	]);
</script>

<div class="day-name-container">
	<div class="day-name">Lun</div>
	<div class="day-name">Mar</div>
	<div class="day-name">Mie</div>
	<div class="day-name">Jue</div>
	<div class="day-name">Vie</div>
	<div class="day-name">Sab</div>
	<div class="day-name">Dom</div>
</div>
<div class="days-container">
	{#each Array(date.getDay() - 1 < 0 ? 0 : date.getDay() - 1) as _, i}
		<CalendarDay />
	{/each}
	{#each Array(lastDate.getDate()) as _, i}
		<CalendarDay day={i + 1} />
	{/each}
</div>

<style>
	.day-name-container {
		display: flex;
		justify-content: space-around;
	}

	.day-name {
		padding: 0.5rem;
		width: 14.28%;
		text-align: center;
		background-color: var(--bg-grey-color);
	}

	.days-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		align-items: center;
		padding: 0.5rem;
		gap: 5px;
		text-align: center;
	}
</style>
