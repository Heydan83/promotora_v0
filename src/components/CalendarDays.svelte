<script lang="ts">
	import type { DayMap, DayName } from '$lib/types/types';

	interface CalendarDays {
		year: number;
		month: number;
	}

	let { year, month }: CalendarDays = $props();
	const date = new Date(year, month - 1);
	const days: DayMap = new Map<number, DayName>([
		[1, 'Lunes' as DayName],
		[2, 'Martes' as DayName],
		[3, 'Miercoles' as DayName],
		[4, 'Jueves' as DayName],
		[5, 'Viernes' as DayName],
		[6, 'Sabado' as DayName],
		[7, 'Domingo' as DayName]
	]);

	$inspect(date.getDay());
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
	<div class="day">1</div>
	<div class="day">2</div>
	<div class="day">3</div>
	<div class="day">3</div>
	<div class="day">5</div>
	<div class="day">6</div>
	<div class="day">7</div>
	<div class="day">8</div>
	<div class="day">9</div>
	<div class="day">10</div>
	<div class="day">11</div>
	<div class="day">12</div>
	<div class="day">13</div>
	<div class="day">14</div>
	<div class="day">15</div>
	<div class="day">16</div>
	<div class="day">17</div>
	<div class="day">18</div>
	<div class="day">19</div>
	<div class="day">20</div>
	<div class="day">21</div>
	<div class="day">22</div>
	<div class="day">23</div>
	<div class="day">24</div>
	<div class="day">25</div>
	<div class="day">26</div>
	<div class="day">27</div>
	<div class="day">28</div>
	<div class="day">29</div>
	<div class="day">30</div>
	<div class="day">31</div>
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
		gap: 1rem;
		align-items: center;
		padding: 0.5rem;
		gap: 10px;
	}

	.days-container div {
		text-align: center;
	}

	.day {
		background-color: var(--bg-grey-light-color);
		height: calc(5vh + 10px);
		border-radius: 10px;
		text-align: center;
	}
</style>
