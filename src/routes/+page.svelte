<div class="calendar">
	<div class="year-tab bg-color-dark font-medium">
		<button class="btn-prev font-medium">&lt;</button>
		<p class="year-text">2025</p>
		<button class="btn-next font-medium">&gt;</button>
	</div>
	<div class="month-tab bg-color-dark">
		<div class="month-wrapper">
			<button class="month-prev text-gray-500">Septiembre</button>
			<p class="month-current-text">Octubre</p>
			<button class="month-next text-gray-500">Noviembre</button>
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
	.year-tab {
		display: flex;
		justify-content: space-between;
		color: white;
		height: 3rem;
	}

	.btn-prev {
		width: 5rem;
	}

	.btn-next {
		width: 5rem;
	}

	.year-text {
		margin-top: 0.7rem;
	}

	.month-tab {
		height: 4rem;
	}

    .month-wrapper {
        display: flex;
		justify-content: space-around;
        padding-top: 1rem;
        text-align: center;
    }

    .month-prev {
        width: 5rem;
    }

    .month-next {
        width: 5rem;
    }

	.month-current-text {
		color: white;
        width: 5rem;
	}

    .days-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 1rem;
        align-items: center;
    }

    .days-container div {
        text-align: center;
    }
</style>
