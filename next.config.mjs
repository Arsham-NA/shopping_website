/** @type {import('next').NextConfig} */
const nextConfig = {
		images: {
			remotePatterns: [
				{
					protocol: 'https',
					hostname: 'jsonplaceholder.typicode.com'
				},
				{
					protocol: 'https',
					hostname: 'reqres.in'
				},
				{
					protocol: 'https',
					hostname: 'fakestoreapi.com'
				},
			],
		},
};



export default nextConfig;
