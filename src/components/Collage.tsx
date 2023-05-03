import './Collage.css'

const Collage = () => {

	const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
		const target = e.target as HTMLElement
		e.dataTransfer.setData('text/plain', target.id)
		target.style.opacity = '0.4'

		const allPanes: HTMLDivElement[] = Array.from(document.querySelectorAll('.pane'))
		allPanes.forEach(pane => pane.style.zIndex = (+pane.style.zIndex - 1).toString() ?? '1')
		target.style.zIndex = '100'
	}

	const enableDragging = (e: React.DragEvent<HTMLElement>) => {
		e.preventDefault()
	}

	const handleDrop = (e: React.DragEvent<HTMLElement>) => {
		e.preventDefault()
		const id = e.dataTransfer.getData('text/plain')
		const draggableElement = document.getElementById(id)
		if (draggableElement) {
			draggableElement.style.opacity = '1'
			draggableElement.style.top = `${e.clientY - 50}px`
			draggableElement.style.left = `${e.clientX - 50}px`
		}
	}

	const generateColor = () => {
		const r = Math.floor(Math.random() * 255)
		const g = Math.floor(Math.random() * 255)
		const b = Math.floor(Math.random() * 255)
		return `rgb(${r}, ${g}, ${b}, 0.5)`
	}

	const generateX = (): string => {
		const windowWidth: number = window.innerWidth
		let x: number = Math.floor(Math.random() * (windowWidth - 100))
		return x.toString() + 'px'
	}

	const generateY = () => {
		const windowHeight: number = window.innerHeight
		let y: number = Math.floor(Math.random() * (windowHeight - 200))
		return y.toString() + 'px'
	}

	return (
		<div id="collage" onDragOver={enableDragging} onDrop={handleDrop}>
			{
				[...Array(10)].map((_, i) => {
					const style = {
						"--pane-color": generateColor(),
						"--x": generateX(),
						"--y": generateY(),
						zIndex: 100
					} as React.CSSProperties
					return (
						<article className="pane" draggable="true" key={i} id={'pane' + i.toString()} onDragStart={handleDragStart} style={style}>
							<div className='triangle'>
								<div className='top'></div>
								<div className='bottom'></div>
							</div>
						</article>
					)
				})
			}
		</div>
	)
}

export default Collage