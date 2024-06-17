import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';


const Skeleton_Loading = () => {
	return Array(6).fill({}).map((value, index) => {
		return (
			<div className="col text-center" key={index}>
				<Skeleton width={230} height={230} className="mb-3 rounded-3"/>
				<Skeleton width={200} className="mb-3 self-align-start"/>
				<Skeleton width={200} className="mb-3"/>
				<Skeleton width={200} className="mb-3"/>
			</div>
	)
	})

}

export default Skeleton_Loading;