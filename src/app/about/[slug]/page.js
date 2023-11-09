export default function SlugPage({params}) {
    return (
        <div>
            about &gt; {params.slug}
        </div>
    );
}

export function generateStaticParams () {
    const pages = ['page1', 'page2'];

    return (pages.map(p=>({slug : p})));
}