
// Error page for Nextjs

export default function Error({ statusCode }: { statusCode: number }) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    );
}
