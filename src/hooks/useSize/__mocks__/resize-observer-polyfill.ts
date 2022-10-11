// const ResizeObserver = jest.genMockFromModule('resize-observer-polyfill');
type CallBackType = (
	entries: [
		{
			contentRect: {
				width: number;
				height: number;
			};
		}
	]
) => void;

export default class ResizeObserver {
	callback: CallBackType;

	target: HTMLElement | null = null;

	constructor(callback: CallBackType) {
		this.callback = callback;
		// window.addEventListener('resize', this.handleResize);
	}

	handleResize = (): void => {
		if (this.target) {
			this.callback([
				{
					contentRect: {
						width: this.target.offsetWidth,
						height: this.target.offsetHeight,
					},
				},
			]);
		}
	};

	observe = (target: HTMLElement): void => {
		this.target = target;
		this.target.addEventListener('resize', this.handleResize);
	};

	disconnect = (): void => {
		window.removeEventListener('resize', this.handleResize);
	};
}
