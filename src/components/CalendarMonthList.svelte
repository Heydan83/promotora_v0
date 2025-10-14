<script lang="ts">
	import { closeIcon } from '$assets';
	import type { MonthMap, MonthName } from '$lib/types/types';
	import { fade } from 'svelte/transition';

	const months: MonthMap = new Map<number, MonthName>([
		[1, 'Enero' as MonthName],
		[2, 'Febrero' as MonthName],
		[3, 'Marzo' as MonthName],
		[4, 'Abril' as MonthName],
		[5, 'Mayo' as MonthName],
		[6, 'Junio' as MonthName],
		[7, 'Julio' as MonthName],
		[8, 'Agosto' as MonthName],
		[9, 'Septiembre' as MonthName],
		[10, 'Octubre' as MonthName],
		[11, 'Noviembre' as MonthName],
		[12, 'Diciembre' as MonthName]
	]);

	interface CalendarMonthList {
		mouseX: number;
		mouseY: number;
		selectedMonth: number;
		changeMonthFromList: Function;
		closeMonthList: Function;
	}

	let { mouseX, mouseY, selectedMonth, changeMonthFromList, closeMonthList }: CalendarMonthList =
		$props();
</script>

<div class="month-list" style={`left: ${mouseX}px; top: ${mouseY}px;`} in:fade={{ duration: 150 }}>
	<div class="btn-container close-btn">
		<button onclick={() => closeMonthList()}>
			<img class="close-icon" src={closeIcon} alt="close" />
		</button>
	</div>
	{#each months as month}
		<div
			class="btn-container"
			style={`margin-top: ${month[0] === 1 ? '1.8rem' : 'unset'};`}
			class:selected-month={month[0] === selectedMonth}
		>
			<button class="btn-month" onclick={() => changeMonthFromList(month[0])}>{month[1]}</button>
		</div>
	{/each}
</div>

<style>
	.month-list {
		background-color: white;
		position: absolute;
		border-radius: 10px;
		padding: 0.2rem 1rem;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	}

	.btn-container {
		display: block;
		padding: 0.2rem 0.5rem;
		border-radius: 10px;
		align-items: center;
		text-align: center;
	}

	.btn-container:hover {
		background-color: var(--bg-dark-color);
		color: white;
	}

	.selected-month {
		background-color: black;
		color: white;
	}

	.close-btn {
		position: absolute;
		right: 0;
		width: max-content;
        height: max-content;
		margin-right: 0.5rem;
        padding: 0.2rem;
	}

	.close-icon {
		width: 1rem;
		height: 1rem;
        object-fit: contain;
	}
</style>
