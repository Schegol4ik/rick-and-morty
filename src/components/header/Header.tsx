
const Header = () => {
    return (
        <div className="bg-custom-light">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-6">
                <a href="/" className="text-3xl font-medium">Rick & Morty <span className="text-blue-600">WiKi</span></a>
                <div className="flex items-center space-x-4 text-2xl">
                    <a>Characters</a>
                    <a>Episode</a>
                    <a>Location</a>
                </div>
            </div>
        </div>
    );
};

export default Header;