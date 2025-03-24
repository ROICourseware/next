
export default async function Reviews(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;

    return (
        <div>
            This is the reviews page for the book with the id {params.id}
        </div>
    );
}