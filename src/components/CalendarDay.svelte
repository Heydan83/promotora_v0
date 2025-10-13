<script lang="ts">
	interface Day {
		year: number;
		month: number;
		day: number;
	}

	let { year, month, day }: Day = $props();
	const currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);
	const receivedDate = new Date(year, month - 1, day);
	const today = currentDate.toDateString() === receivedDate.toDateString() ? 'today' : 'day';
</script>

<div class={today}>{day}</div>

<style>
	.day {
		background-color: var(--bg-grey-light-color);
		border-radius: 10px;
		text-align: center;
		height: 5rem;
	}

	.today {
		background-color: black;
		color: white;
		border-radius: 10px;
		text-align: center;
		height: 5rem;
	}

	@media (max-width: 991px) {
		.day {
			height: calc(5vh + 15px);
		}

		.today {
			height: calc(5vh + 15px);
		}
	}
</style>
