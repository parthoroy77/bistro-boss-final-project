import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-final-project-server.vercel.app/menu');
            return res.json();
        }
    })
    return [menu, refetch, loading];
}

export default useMenu