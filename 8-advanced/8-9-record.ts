{
    // 함께 묶는것

    type PageInfo = {
        title: string;
    }
    type Page = 'home' | 'about' | 'contact'

    const nav: Record<Page, PageInfo> = {
        home: { title: 's' },
        about: { title: 's' },
        contact: { title: 's' },
    }
}