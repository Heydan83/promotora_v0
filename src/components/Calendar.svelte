<script lang="ts">
	import { leftArrow, rightArrow } from '$assets';

	const currentDate: Date = new Date();
	const fromYear = 2000;
	const year: number = currentDate.getFullYear() - fromYear + 1;
	const months = new Map<number, string>([
		[1, 'Enero'],
		[2, 'Febrero'],
		[3, 'Marzo'],
		[4, 'Abril'],
		[5, 'Mayo'],
		[6, 'Junio'],
		[7, 'Julio'],
		[8, 'Agosto'],
		[9, 'Septiembre'],
		[10, 'Octubre'],
		[11, 'Noviembre'],
		[12, 'Diciembre']
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
		} else if (selectedMonth === 12) selectedMonth = 1;
		else selectedMonth += 1;
	}
</script>

<div class="calendar">
	<div class="year-tab font-medium">
		<button class="btn-prev font-medium" onclick={() => changeYear('prev')}
			><img src={leftArrow} alt="Mes anterior" class="left-arrow-small" /></button
		>
		<p class="year-text">
			<select class="years-select">
				{#each Array(year) as _, i}
					<option selected={fromYear + i == selectedYear} value={fromYear + i}
						>{fromYear + i}</option
					>
				{/each}
			</select>
		</p>
		<button class="btn-next font-medium" onclick={() => changeYear('next')}
			><img src={rightArrow} alt="Siguiente mes" class="left-arrow-small" /></button
		>
	</div>
	<div class="month-tab">
		<div class="month-wrapper">
			<button class="month-prev text-gray-500" onclick={() => changeMonth('prev')}
				>{selectedMonth === 1 ? months.get(12) : months.get(selectedMonth - 1)}</button
			>
			<p class="month-current-text">{months.get(selectedMonth)}</p>
			<button class="month-next text-gray-500" onclick={() => changeMonth('next')}
				>{selectedMonth === 12 ? months.get(1) : months.get(selectedMonth + 1)}</button
			>
		</div>
	</div>
	<div class="days-container">
		<div>LUN</div>
		<div>MAR</div>
		<div>MIE</div>
		<div>JUE</div>
		<div>VIE</div>
		<div>SAB</div>
		<div>DOM</div>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>3</div>
		<div>5</div>
		<div>6</div>
		<div>7</div>
		<div>8</div>
		<div>9</div>
		<div>10</div>
		<div>11</div>
		<div>12</div>
		<div>13</div>
		<div>14</div>
		<div>15</div>
		<div>16</div>
		<div>17</div>
		<div>18</div>
		<div>19</div>
		<div>20</div>
		<div>21</div>
		<div>22</div>
		<div>23</div>
		<div>24</div>
		<div>25</div>
		<div>26</div>
		<div>27</div>
		<div>28</div>
		<div>29</div>
		<div>30</div>
		<div>31</div>
	</div>
</div>

<!-- <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div> -->

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

	.year-text {
		margin-top: 0.7rem;
	}

	.month-tab {
		height: 5rem;
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

	.days-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 1rem;
		align-items: center;
		padding: 0.5rem;
	}

	.days-container div {
		text-align: center;
	}
</style>
