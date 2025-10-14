<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { leftArrowIcon, rightArrowIcon } from '$assets';
	import type { MonthName, MonthMap } from '$lib/types/types';
	import CalendarDays from '$components/CalendarDays.svelte';
	import CalendarMonthList from './CalendarMonthList.svelte';

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
	let isMonthListOpen: boolean = $state(false); 
	let mouseX: number = $state(0);
	let mouseY: number = $state(0);

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

	function saveMousePosition(e: MouseEvent): void {
		isMonthListOpen = !isMonthListOpen;
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	function closeMonthList(): void {
		isMonthListOpen = false;
	}

	function changeMonthFromList(newSelectedMonth: number): void {
		selectedMonth = newSelectedMonth;
		closeMonthList();
	}
</script>

<div class="calendar" in:fade={{ duration: 150 }}>
	<div class="year-tab font-medium">
		<button class="btn-prev font-medium" onclick={() => changeYear('prev')}>
			<img src={leftArrowIcon} alt="Mes anterior" class="left-arrow-small" />
		</button>
		<select
			id="years"
			class="years-select"
			onchange={(e) => {
				if (e.target) selectedYear = Number((e.target as HTMLSelectElement).value);
			}}
		>
			{#each Array(year) as _, i}
				<option
					id={(fromYear + i).toString()}
					selected={fromYear + i == selectedYear}
					value={fromYear + i}>{fromYear + i}</option
				>
			{/each}
		</select>
		<button class="btn-next font-medium" onclick={() => changeYear('next')}
			><img src={rightArrowIcon} alt="Siguiente mes" class="left-arrow-small" /></button
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
				<button onclick={(e) => saveMousePosition(e)}>
					<h4 class="month-current-text" out:fly={{ x: -100, duration: 40 }}>
						{months.get(selectedMonth)}
					</h4>
				</button>
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

{#if isMonthListOpen}
	<CalendarMonthList {mouseX} {mouseY} {selectedMonth} {changeMonthFromList} {closeMonthList} />
{/if}

<!-- <iframe title="mapa" width="600" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6145.160129343955!2d-119.65241064970873!3d36.338625886909924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094c3a3d5e7d5f7%3A0xd9d537813059e9a5!2sSave%20Mart!5e1!3m2!1sen!2smx!4v1760471543536!5m2!1sen!2smx"></iframe> -->

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

	.years-select {
		font-weight: bold;
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
		margin-bottom: 0.7rem;
		color: black;
		width: 5rem;
		font-weight: bold;
	}
</style>
