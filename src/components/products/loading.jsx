import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';


const Skeleton_Loading = () => {
	return Array(6).fill({}).map(() => {
		return (
		<>
			{/* <div className="col" >
				<div className="card h-100 p-3 border-0">
					<div className="card-img-top p-5 border-bottom object-fit-contain" style={{height: "300px"}}><Skeleton width={"100%"} height={"100%"}/></div>
					<div className="card-body d-flex flex-column gap-1">
						<h6 className="card-title text-justify"><Skeleton/></h6>									
						<p className="card-title text-secondary"><Skeleton/></p>
						<p><Skeleton/></p>
						<p><Skeleton/></p>
					</div>
				</div>
			</div> */}

			<div className="col text-center">
				<Skeleton width={230} height={230} className="mb-3 rounded-3"/>
				<Skeleton width={200} className="mb-3 self-align-start"/>
				<Skeleton width={200} className="mb-3"/>
				<Skeleton width={200} className="mb-3"/>
			</div>
	</>
	)
	})

}

export default Skeleton_Loading;