export function CardSkeleton() {
    return (
        <div className="card card-skeleton skeleton">
            <div className="card-image-skeleton"></div>
            <div className="card-body">
                <p className="card-title card-text-skeleton"> &nbsp;</p>
                <p className="card-text card-text-skeleton"> &nbsp;</p>
            </div>
        </div>
    );
}

export function CardListSkeleton() {
    return (
        <div className="row">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}