const Loading = () => {
	return (
		<div className="vw-100 vh-100 d-flex justify-content-center align-items-center" style={{position: "absolute", inset: "0", zIndex: "2", backdropFilter: "blur(10px)"}}>
			<div className="spinner-grow" role="status">
			</div>
		</div>
	)
}

export default Loading;