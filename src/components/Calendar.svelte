<script lang="ts">
	import { fly } from 'svelte/transition';
	import { leftArrow, rightArrow } from '$assets';
	import CalendarDays from '$components/CalendarDays.svelte';
	import type { MonthName, MonthMap } from '$lib/types/types';

	const currentDate: Date = new Date();
	const fromYear: number = 2000;
	const year: number = currentDate.getFullYear() - fromYear + 1;

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
	let selectedYear = $state(currentDate.getFullYear());
	let selectedMonth = $state(currentDate.getMonth() + 1);

	function changeYear(prevOrNext: string): void {
		if (prevOrNext === 'prev') {
			if (selectedYear > 2000) selectedYear -= 1;
		} else if (selectedYear < currentDate.getFullYear()) selectedYear += 1;
	}

	function changeMonth(prevOrNext: string): void {
		if (prevOrNext === 'prev') {
			if (selectedMonth === 1) selectedMonth = 12;
			else selectedMonth -= 1;
		} else {
			if (selectedMonth === 12) selectedMonth = 1;
			else selectedMonth += 1;
		}
	}
</script>

<div class="calendar">
	<div class="year-tab font-medium">
		<button class="btn-prev font-medium" onclick={() => changeYear('prev')}>
			<img src={leftArrow} alt="Mes anterior" class="left-arrow-small" />
		</button>
		<select id="years" class="years-select">
			{#each Array(year) as _, i}
				<option
					id={(fromYear + i).toString()}
					selected={fromYear + i == selectedYear}
					value={fromYear + i}>{fromYear + i}</option
				>
			{/each}
		</select>
		<button class="btn-next font-medium" onclick={() => changeYear('next')}
			><img src={rightArrow} alt="Siguiente mes" class="left-arrow-small" /></button
		>
	</div>
	<div class="month-tab">
		<div class="month-wrapper">
			{#key selectedMonth}
				<button
					class="month-prev text-gray-500"
					onclick={() => changeMonth('prev')}
					out:fly={{ x: -100, duration: 40 }}
				>
					{selectedMonth === 1 ? months.get(12) : months.get(selectedMonth - 1)}
				</button>
				<p class="month-current-text" out:fly={{ x: -100, duration: 40 }}>
					{months.get(selectedMonth)}
				</p>
				<button
					class="month-next text-gray-500"
					onclick={() => changeMonth('next')}
					out:fly={{ x: -100, duration: 40 }}
					>{selectedMonth === 12 ? months.get(1) : months.get(selectedMonth + 1)}</button
				>
			{/key}
		</div>
	</div>
	<CalendarDays year={selectedYear} month={selectedMonth} />
</div>

<style>
	.calendar {
		height: 100vh;
		background-color: var(--bg-light-color);
	}

	.year-tab {
		display: flex;
		justify-content: space-between;
		color: black;
		height: 3rem;
		border-bottom: 1px solid rgb(218, 218, 219);
	}

	.btn-prev {
		width: 45%;
	}

	.btn-next {
		width: 45%;
	}

	.month-tab {
		padding-bottom: 0.7rem;
	}

	.month-wrapper {
		display: flex;
		justify-content: space-around;
		padding-top: 1rem;
		text-align: center;
		border-bottom: 1px solid rgb(218, 218, 219);
	}

	.month-prev {
		margin-bottom: 0.7rem;
		width: 45%;
	}

	.month-next {
		margin-bottom: 0.7rem;
		width: 45%;
	}

	.month-current-text {
		color: black;
		width: 5rem;
	}
</style>
