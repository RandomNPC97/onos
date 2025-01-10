from bs4 import BeautifulSoup

# Sample HTML content (replace with actual HTML if scraping from a file or web page)
html_content = """<div class='product-card'>
    <div class='product-tag'>Buy One Get One FREE</div>
    <div class='carousel'>
        <img src='image1.jpg' alt='Product Image 1'>
        <img src='image2.jpg' alt='Product Image 2'>
    </div>
    <div class='product-sizes'>
        <button>XXS</button>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
    </div>
    <div class='product-title'>Amazing Product</div>
</div>"""

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Extract product information
def scrape_product_info(soup):
    product_info = {}

    # Extract the product title
    title = soup.find('div', class_='product-title')
    product_info['title'] = title.text.strip() if title else 'N/A'

    # Extract the product tag
    tag = soup.find('div', class_='product-tag')
    product_info['tag'] = tag.text.strip() if tag else 'N/A'

    # Extract the image URLs from the carousel
    images = soup.find_all('img')
    product_info['images'] = [img['src'] for img in images if 'src' in img.attrs]

    # Extract available sizes
    sizes = soup.find('div', class_='product-sizes')
    if sizes:
        product_info['sizes'] = [btn.text.strip() for btn in sizes.find_all('button')]
    else:
        product_info['sizes'] = []

    return product_info

# Scrape the product information
product_data = scrape_product_info(soup)

# Display the scraped information
for key, value in product_data.items():
    print(f"{key.capitalize()}: {value}")
