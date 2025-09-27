const components = {
    intel: {
        cpus: [
            // Budget
            { name: "Intel Core i3-12100F", socket: "LGA1700", generation: "12th", tier: "budget", ramType: ["DDR4", "DDR5"], description: "Budget gaming champion, excellent value" },
            { name: "Intel Core i3-13100F", socket: "LGA1700", generation: "13th", tier: "budget", ramType: ["DDR4", "DDR5"], description: "Newer budget option with better performance" },
            { name: "Intel Core i5-11400F", socket: "LGA1200", generation: "11th", tier: "budget", ramType: ["DDR4"], description: "Older but still capable budget choice" },
            // Balanced
            { name: "Intel Core i5-12400F", socket: "LGA1700", generation: "12th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Best bang for buck midrange gaming" },
            { name: "Intel Core i5-13400F", socket: "LGA1700", generation: "13th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Stronger midrange with 10-core hybrid design" },
            { name: "Intel Core i5-12600KF", socket: "LGA1700", generation: "12th", tier: "balanced", ramType: ["DDR4", "DDR5"], description: "Unlocked balanced CPU for enthusiasts" },
            // Maxed
            { name: "Intel Core i7-13700F", socket: "LGA1700", generation: "13th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "High-end gaming and productivity powerhouse" },
            { name: "Intel Core i9-13900F", socket: "LGA1700", generation: "13th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "Flagship performance for demanding tasks" },
            { name: "Intel Core i7-14700KF", socket: "LGA1700", generation: "14th", tier: "maxed", ramType: ["DDR4", "DDR5"], description: "Latest high-end unlocked processor" }
        ],
        motherboards: [
            // Budget
            { name: "ASUS PRIME B660M-A D4", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "budget", description: "Intel 12th/13th budget motherboard" },
            { name: "MSI PRO B660M-A", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "budget", description: "Reliable budget option with good features" },
            { name: "Gigabyte B660M DS3H", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "budget", description: "Basic but solid budget motherboard" },
            // Balanced
            { name: "MSI PRO B760M-A WIFI", socket: "LGA1700", ramType: "DDR5", chipset: "B760", tier: "balanced", description: "Intel 13th gen midrange with WiFi" },
            { name: "ASUS TUF Gaming B660M-Plus", socket: "LGA1700", ramType: "DDR4", chipset: "B660", tier: "balanced", description: "Gaming-focused balanced motherboard" },
            { name: "ASRock B760M Pro RS", socket: "LGA1700", ramType: "DDR5", chipset: "B760", tier: "balanced", description: "Feature-rich balanced option" },
            // Maxed
            { name: "ASUS ROG Strix Z690-E Gaming", socket: "LGA1700", ramType: "DDR5", chipset: "Z690", tier: "maxed", description: "Premium gaming motherboard with overclocking" },
            { name: "MSI MPG Z790 Gaming Plus", socket: "LGA1700", ramType: "DDR5", chipset: "Z790", tier: "maxed", description: "High-end gaming with latest features" },
            { name: "Gigabyte Z790 Aorus Elite AX", socket: "LGA1700", ramType: "DDR5", chipset: "Z790", tier: "maxed", description: "Premium motherboard with WiFi 6E" }
        ]
    },
    ryzen: {
        cpus: [
            // Budget
            { name: "Ryzen 5 4500", socket: "AM4", generation: "4000", tier: "budget", ramType: ["DDR4"], description: "Entry-level Ryzen, very affordable" },
            { name: "Ryzen 3 4100", socket: "AM4", generation: "4000", tier: "budget", ramType: ["DDR4"], description: "Budget quad-core for basic gaming" },
            // Balanced
            { name: "Ryzen 5 5600G", socket: "AM4", generation: "5000", tier: "balanced", ramType: ["DDR4"], description: "APU option, popular in PH shops" },
            { name: "Ryzen 5 5600", socket: "AM4", generation: "5000", tier: "balanced", ramType: ["DDR4"], description: "King of budget builds, very common in PH" },
            { name: "Ryzen 5 7600", socket: "AM5", generation: "7000", tier: "balanced", ramType: ["DDR5"], description: "Great midrange for AM5 platform" },
            { name: "Ryzen 7 5700X", socket: "AM4", generation: "5000", tier: "balanced", ramType: ["DDR4"], description: "8-core balanced performance" },
            // Maxed
            { name: "Ryzen 7 7800X3D", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "Gaming king with 3D V-Cache technology" },
            { name: "Ryzen 9 7900X", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "12-core powerhouse for content creation" },
            { name: "Ryzen 9 7950X3D", socket: "AM5", generation: "7000", tier: "maxed", ramType: ["DDR5"], description: "Ultimate gaming and productivity CPU" }
        ],
        motherboards: [
            // Budget
            { name: "ASRock A520M-HVS", socket: "AM4", ramType: "DDR4", chipset: "A520", tier: "budget", description: "Basic AM4 budget motherboard" },
            { name: "MSI A520M-A Pro", socket: "AM4", ramType: "DDR4", chipset: "A520", tier: "budget", description: "Reliable budget option for Ryzen" },
            { name: "Gigabyte A520M S2H", socket: "AM4", ramType: "DDR4", chipset: "A520", tier: "budget", description: "Entry-level AM4 motherboard" },
            // Balanced
            { name: "ASRock B550M Steel Legend", socket: "AM4", ramType: "DDR4", chipset: "B550", tier: "balanced", description: "Ryzen 3000-5000 balanced choice" },
            { name: "MSI B650M Mortar", socket: "AM5", ramType: "DDR5", chipset: "B650", tier: "balanced", description: "Ryzen 7000 midrange motherboard" },
            { name: "ASUS TUF Gaming B550M-Plus", socket: "AM4", ramType: "DDR4", chipset: "B550", tier: "balanced", description: "Gaming-focused AM4 motherboard" },
            // Maxed
            { name: "ASUS ROG Strix X670E-E Gaming", socket: "AM5", ramType: "DDR5", chipset: "X670E", tier: "maxed", description: "Premium AM5 gaming motherboard" },
            { name: "MSI MPG X670E Carbon", socket: "AM5", ramType: "DDR5", chipset: "X670E", tier: "maxed", description: "High-end AM5 with premium features" },
            { name: "Gigabyte X670 Aorus Master", socket: "AM5", ramType: "DDR5", chipset: "X670", tier: "maxed", description: "Flagship AM5 motherboard" }
        ]
    }
};

const gpuData = {
    // Budget
    "GTX 1650": { tier: "budget", minPSU: 400, description: "Entry-level gaming, still popular in PH" },
    "RX 6500 XT": { tier: "budget", minPSU: 400, description: "AMD budget option, decent 1080p performance" },
    "GTX 1660 Super": { tier: "budget", minPSU: 450, description: "Budget gaming champion, widely available" },
    // Balanced
    "RTX 3060": { tier: "balanced", minPSU: 550, description: "Mainstream 1080p gaming with ray tracing" },
    "RTX 4060": { tier: "balanced", minPSU: 550, description: "Efficient modern mainstream GPU" },
    "RX 6700 XT": { tier: "balanced", minPSU: 650, description: "Strong 1440p gaming performance" },
    // Maxed
    "RTX 4070 Super": { tier: "maxed", minPSU: 650, description: "High-end 1440p gaming powerhouse" },
    "RTX 4080 Super": { tier: "maxed", minPSU: 750, description: "4K gaming capable, premium choice" },
    "RX 7900 XTX": { tier: "maxed", minPSU: 800, description: "AMD flagship, excellent 4K performance" }
};

const ramData = {
    // Budget DDR4
    "Corsair Vengeance LPX 16GB DDR4-3200": { type: "DDR4", tier: "budget", description: "Reliable budget DDR4 memory" },
    "Kingston Fury Beast 16GB DDR4-3200": { type: "DDR4", tier: "budget", description: "Good value DDR4 option" },
    "Team T-Force Vulcan Z 16GB DDR4-3200": { type: "DDR4", tier: "budget", description: "Budget-friendly DDR4 kit" },
    // Balanced
    "G.Skill Ripjaws V 16GB DDR4-3600": { type: "DDR4", tier: "balanced", description: "Fast DDR4 for gaming builds" },
    "Corsair Vengeance RGB Pro 32GB DDR4-3600": { type: "DDR4", tier: "balanced", description: "High capacity with RGB lighting" },
    "Kingston Fury Beast 16GB DDR5-5600": { type: "DDR5", tier: "balanced", description: "Entry-level DDR5 performance" },
    // Maxed
    "G.Skill Trident Z5 32GB DDR5-6000": { type: "DDR5", tier: "maxed", description: "High-speed DDR5 for enthusiasts" },
    "Corsair Dominator Platinum RGB 32GB DDR5-6400": { type: "DDR5", tier: "maxed", description: "Premium DDR5 with RGB" },
    "Team T-Force Delta RGB 32GB DDR5-6000": { type: "DDR5", tier: "maxed", description: "High-performance DDR5 kit" }
};

const storageData = {
    // Budget
    "Kingston NV2 500GB NVMe": { type: "NVMe", capacity: "500GB", tier: "budget", description: "Basic NVMe storage" },
    "WD Blue SN570 500GB NVMe": { type: "NVMe", capacity: "500GB", tier: "budget", description: "Reliable budget NVMe drive" },
    "Crucial MX4 1TB SATA SSD": { type: "SATA", capacity: "1TB", tier: "budget", description: "Large capacity budget SSD" },
    // Balanced
    "Samsung 980 1TB NVMe": { type: "NVMe", capacity: "1TB", tier: "balanced", description: "Fast mainstream NVMe drive" },
    "WD Blue SN570 1TB NVMe": { type: "NVMe", capacity: "1TB", tier: "balanced", description: "Balanced performance and capacity" },
    "Crucial P3 Plus 1TB NVMe": { type: "NVMe", capacity: "1TB", tier: "balanced", description: "Good value NVMe option" },
    // Maxed
    "Samsung 980 Pro 1TB NVMe Gen4": { type: "NVMe", capacity: "1TB", tier: "maxed", description: "Premium Gen4 NVMe performance" },
    "WD Black SN850X 2TB NVMe Gen4": { type: "NVMe", capacity: "2TB", tier: "maxed", description: "High-end gaming storage" },
    "Samsung 990 Pro 2TB NVMe Gen4": { type: "NVMe", capacity: "2TB", tier: "maxed", description: "Flagship NVMe drive" }
};

const psuData = {
    // Budget
    "Corsair CV450 80+ Bronze": { wattage: 450, tier: "budget", description: "Basic 80+ Bronze efficiency" },
    "EVGA BR 500W 80+ Bronze": { wattage: 500, tier: "budget", description: "Reliable budget power supply" },
    "Seasonic S12III 550W 80+ Bronze": { wattage: 550, tier: "budget", description: "Trusted budget PSU brand" },
    // Balanced
    "Corsair CV650 80+ Bronze": { wattage: 650, tier: "balanced", description: "Mainstream power supply" },
    "DeepCool PM650D 80+ Gold": { wattage: 650, tier: "balanced", description: "Efficient 80+ Gold PSU" },
    "Seasonic Focus GX-750 80+ Gold": { wattage: 750, tier: "balanced", description: "High-quality modular PSU" },
    // Maxed
    "Corsair RM850x 80+ Gold": { wattage: 850, tier: "maxed", description: "Premium fully modular PSU" },
    "Seasonic Prime TX-1000 80+ Titanium": { wattage: 1000, tier: "maxed", description: "Flagship efficiency PSU" },
    "EVGA SuperNOVA 1000 G6 80+ Gold": { wattage: 1000, tier: "maxed", description: "High-wattage premium PSU" }
};

const caseData = {
    // Budget
    "Tecware Forge M2": { tier: "budget", description: "Very popular budget case in PH" },
    "DeepCool Matrexx 30": { tier: "budget", description: "Compact budget micro-ATX case" },
    "Cooler Master MasterBox Q300L": { tier: "budget", description: "Mini-ITX budget option" },
    // Balanced
    "DeepCool Matrexx 55 Mesh": { tier: "balanced", description: "Good airflow, balanced features" },
    "Fractal Design Core 1000": { tier: "balanced", description: "Clean design, good build quality" },
    "Cooler Master MasterBox MB511": { tier: "balanced", description: "Mesh front panel for airflow" },
    // Maxed
    "NZXT H510 Flow": { tier: "maxed", description: "Premium design with excellent airflow" },
    "Fractal Design Define 7": { tier: "maxed", description: "High-end case with sound dampening" },
    "Lian Li PC-O11 Dynamic": { tier: "maxed", description: "Premium showcase case for enthusiasts" }
};

let currentPlatform = 'intel';
let selectedComponents = {};
let feedbackTimeout;

// DOM elements
const intelToggle = document.getElementById('intel-toggle');
const ryzenToggle = document.getElementById('ryzen-toggle');
const cpuDropdown = document.getElementById('cpu-dropdown');
const motherboardDropdown = document.getElementById('motherboard-dropdown');
const gpuDropdown = document.getElementById('gpu-dropdown');
const ramDropdown = document.getElementById('ram-dropdown');
const storageDropdown = document.getElementById('storage-dropdown');
const psuDropdown = document.getElementById('psu-dropdown');
const caseDropdown = document.getElementById('case-dropdown');
const toastContainer = document.getElementById('toast-container');
const feedbackPanel = document.getElementById('feedback-panel');

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize
function init() {
    updateCPUOptions();
    updateMotherboardOptions();
    populateStaticDropdowns();
    addEventListeners();
}

function populateStaticDropdowns() {
    // GPU options - randomized
    gpuDropdown.innerHTML = '<option value="">Select GPU</option>';
    const shuffledGPUs = shuffleArray(Object.keys(gpuData));
    shuffledGPUs.forEach(gpu => {
        const option = document.createElement('option');
        option.value = gpu;
        option.textContent = gpu;
        gpuDropdown.appendChild(option);
    });

    // RAM options - randomized
    ramDropdown.innerHTML = '<option value="">Select RAM</option>';
    const shuffledRAM = shuffleArray(Object.keys(ramData));
    shuffledRAM.forEach(ram => {
        const option = document.createElement('option');
        option.value = ram;
        option.textContent = ram;
        ramDropdown.appendChild(option);
    });

    // Storage options - randomized
    storageDropdown.innerHTML = '<option value="">Select Storage</option>';
    const shuffledStorage = shuffleArray(Object.keys(storageData));
    shuffledStorage.forEach(storage => {
        const option = document.createElement('option');
        option.value = storage;
        option.textContent = storage;
        storageDropdown.appendChild(option);
    });

    // PSU options - randomized
    psuDropdown.innerHTML = '<option value="">Select PSU</option>';
    const shuffledPSU = shuffleArray(Object.keys(psuData));
    shuffledPSU.forEach(psu => {
        const option = document.createElement('option');
        option.value = psu;
        option.textContent = psu;
        psuDropdown.appendChild(option);
    });

    // Case options - randomized
    caseDropdown.innerHTML = '<option value="">Select PC Case</option>';
    const shuffledCases = shuffleArray(Object.keys(caseData));
    shuffledCases.forEach(pcCase => {
        const option = document.createElement('option');
        option.value = pcCase;
        option.textContent = pcCase;
        caseDropdown.appendChild(option);
    });
}

// Event listeners
function addEventListeners() {
    intelToggle.addEventListener('click', () => switchPlatform('intel'));
    ryzenToggle.addEventListener('click', () => switchPlatform('ryzen'));
    
    // Add change listeners for all dropdowns
    const allDropdowns = document.querySelectorAll('.component-dropdown');
    allDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function() {
            handleComponentChange(this);
            if (this.value) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    });
}

// Switch platform (Intel/Ryzen)
function switchPlatform(platform) {
    currentPlatform = platform;
    
    // Update toggle buttons
    intelToggle.classList.toggle('active', platform === 'intel');
    ryzenToggle.classList.toggle('active', platform === 'ryzen');
    
    // Reset selections
    selectedComponents = {};
    resetAllDropdowns();
    
    // Update options
    updateCPUOptions();
    updateMotherboardOptions();
    hideFeedbackPanel();
}

function resetAllDropdowns() {
    const allDropdowns = document.querySelectorAll('.component-dropdown');
    allDropdowns.forEach(dropdown => {
        dropdown.value = '';
        dropdown.classList.remove('selected');
    });
    
    // Clear all status indicators
    document.querySelectorAll('.status-indicator').forEach(indicator => {
        indicator.remove();
    });
    
    // Reset component box states
    document.querySelectorAll('.component-box').forEach(box => {
        box.classList.remove('optimized', 'warning');
    });
}

function updateCPUOptions() {
    const cpus = shuffleArray(components[currentPlatform].cpus);
    cpuDropdown.innerHTML = '<option value="">Select CPU</option>';
    
    cpus.forEach(cpu => {
        const option = document.createElement('option');
        option.value = cpu.name;
        option.textContent = cpu.name;
        cpuDropdown.appendChild(option);
    });
}

function updateMotherboardOptions() {
    const motherboards = shuffleArray(components[currentPlatform].motherboards);
    motherboardDropdown.innerHTML = '<option value="">Select Motherboard</option>';
    
    motherboards.forEach(motherboard => {
        const option = document.createElement('option');
        option.value = motherboard.name;
        option.textContent = motherboard.name;
        motherboardDropdown.appendChild(option);
    });
}

function handleComponentChange(dropdown) {
    const componentType = dropdown.id.replace('-dropdown', '');
    selectedComponents[componentType] = dropdown.value;
    
    if (dropdown.value) {
        showComponentFeedback(componentType, dropdown.value);
    }
    
    updateCompatibility();
}

function showComponentFeedback(componentType, componentValue) {
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackContent = document.getElementById('feedback-content');
    
    let feedback = getComponentFeedback(componentType, componentValue);
    
    feedbackTitle.textContent = `${componentType.toUpperCase()}: ${componentValue}`;
    feedbackContent.innerHTML = feedback;
    
    feedbackPanel.classList.add('show');
    
    // Auto-hide after 8 seconds unless hovered
    clearTimeout(feedbackTimeout);
    feedbackTimeout = setTimeout(() => {
        if (!feedbackPanel.matches(':hover')) {
            hideFeedbackPanel();
        }
    }, 8000);
}

function hideFeedbackPanel() {
    feedbackPanel.classList.remove('show');
}

function getComponentFeedback(componentType, componentValue) {
    let feedback = '';
    let status = 'balanced';
    
    switch(componentType) {
        case 'cpu':
            const cpu = getCPUData(componentValue);
            if (cpu) {
                const gpu = selectedComponents.gpu ? gpuData[selectedComponents.gpu] : null;
                
                if (gpu && isBottleneck(cpu, gpu)) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BOTTLENECK</div>`;
                    feedback += `<p>${cpu.description}</p>`;
                    feedback += `<p><strong>Warning:</strong> This CPU may bottleneck your selected GPU by more than 10%.</p>`;
                } else {
                    status = 'good';
                    feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                    feedback += `<p>${cpu.description}</p>`;
                    if (cpu.tier === 'budget') {
                        feedback += `<p>Balanced and efficient for most users at 1080p gaming.</p>`;
                    } else if (cpu.tier === 'balanced') {
                        feedback += `<p>Balanced and efficient for most users at 1080p-1440p gaming.</p>`;
                    } else if (cpu.tier === 'maxed') {
                        feedback += `<p>High-end performance for demanding tasks and 4K gaming.</p>`;
                    }
                }
            }
            break;
            
        case 'gpu':
            const gpu = gpuData[componentValue];
            if (gpu) {
                const cpu = getCPUData(selectedComponents.cpu);
                
                if (cpu && isBottleneck(cpu, gpu)) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BOTTLENECK</div>`;
                    feedback += `<p>${gpu.description}</p>`;
                    feedback += `<p><strong>Warning:</strong> This GPU causes >10% bottleneck with your current setup.</p>`;
                } else if (cpu && isOverkill(cpu, gpu)) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BAD</div>`;
                    feedback += `<p>${gpu.description}</p>`;
                    feedback += `<p><strong>Overkill / Bad pairing:</strong> This GPU is too weak for your high-end CPU.</p>`;
                } else {
                    status = 'good';
                    feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                    feedback += `<p>${gpu.description}</p>`;
                    feedback += `<p>Balanced and efficient for most users.</p>`;
                }
            }
            break;
            
        case 'motherboard':
            const motherboard = getMotherboardData(componentValue);
            if (motherboard) {
                const cpu = getCPUData(selectedComponents.cpu);
                
                if (cpu && motherboard.socket !== cpu.socket) {
                    status = 'bottleneck';
                    feedback = `<div class="feedback-status ${status}">BAD</div>`;
                    feedback += `<p>Incompatible socket with selected CPU.</p>`;
                } else {
                    status = 'good';
                    feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                    feedback += `<p>${motherboard.description}</p>`;
                    feedback += `<p>Supports ${motherboard.ramType} memory and ${motherboard.socket} CPUs.</p>`;
                }
            }
            break;
            
        case 'psu':
            const psu = psuData[componentValue];
            const selectedGPU = selectedComponents.gpu ? gpuData[selectedComponents.gpu] : null;
            
            if (psu && selectedGPU && psu.wattage < selectedGPU.minPSU) {
                status = 'bottleneck';
                feedback = `<div class="feedback-status ${status}">BAD</div>`;
                feedback += `<p>Inadequate power for selected GPU. Minimum ${selectedGPU.minPSU}W required.</p>`;
            } else {
                status = 'good';
                feedback = `<div class="feedback-status ${status}">GOOD</div>`;
                feedback += `<p>Balanced and efficient for most users.</p>`;
            }
            break;
            
        default:
            status = 'good';
            feedback = `<div class="feedback-status ${status}">GOOD</div>`;
            feedback += `<p>Balanced and efficient for most users.</p>`;
    }
    
    return feedback;
}

function showToast(message, type = 'success', duration = 5000) {
    // Clear existing toasts
    const existingToasts = toastContainer.querySelectorAll('.toast');
    existingToasts.forEach(toast => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    });

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '';
    if (type === 'success') icon = '✅';
    else if (type === 'warning') icon = '⚠️';
    else if (type === 'error') icon = '❌';
    
    toast.innerHTML = `<span class="toast-icon">${icon}</span>${message}`;
    
    toastContainer.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto-hide unless hovered
    const hideToast = () => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    };
    
    const timeoutId = setTimeout(hideToast, duration);
    
    toast.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    toast.addEventListener('mouseleave', () => setTimeout(hideToast, 1000));
    toast.addEventListener('click', hideToast);
}

function updateCompatibility() {
    clearStatusIndicators();
    
    const cpu = getCPUData(selectedComponents.cpu);
    const motherboard = getMotherboardData(selectedComponents.motherboard);
    const gpu = selectedComponents.gpu;
    const ram = selectedComponents.ram;
    const psu = selectedComponents.psu;
    const storage = selectedComponents.storage;
    const pcCase = selectedComponents.case;

    // Update motherboard compatibility
    updateMotherboardCompatibility(cpu);
    
    // Update RAM compatibility
    updateRAMCompatibility(cpu, motherboard);
    
    // Check CPU-GPU bottlenecks and show toast
    if (cpu && gpu) {
        checkCPUGPUBottleneck(cpu, gpu);
    }
    
    // Check PSU adequacy
    checkPSUAdequacy(gpu, psu);
    
    // Check overall optimization
    checkOverallOptimization(cpu, motherboard, gpu, ram, psu);
    
    updateBuildStatus(cpu, motherboard, gpu, ram, psu, storage, pcCase);
}

function getCPUData(cpuName) {
    if (!cpuName) return null;
    const allCPUs = [...components.intel.cpus, ...components.ryzen.cpus];
    return allCPUs.find(cpu => cpu.name === cpuName);
}

function getMotherboardData(motherboardName) {
    if (!motherboardName) return null;
    const allMotherboards = [...components.intel.motherboards, ...components.ryzen.motherboards];
    return allMotherboards.find(mb => mb.name === motherboardName);
}

function updateMotherboardCompatibility(cpu) {
    if (!cpu) return;
    
    const motherboardOptions = motherboardDropdown.querySelectorAll('option');
    motherboardOptions.forEach(option => {
        if (option.value === '') return;
        
        const motherboard = getMotherboardData(option.value);
        if (motherboard && motherboard.socket !== cpu.socket) {
            option.classList.add('incompatible');
            option.disabled = true;
        } else {
            option.classList.remove('incompatible');
            option.disabled = false;
        }
    });
}

function updateRAMCompatibility(cpu, motherboard) {
    if (!cpu && !motherboard) return;
    
    const ramOptions = ramDropdown.querySelectorAll('option');
    ramOptions.forEach(option => {
        if (option.value === '') return;
        
        const ram = ramData[option.value];
        if (!ram) return;
        
        let compatible = false;
        
        if (cpu && cpu.ramType.includes(ram.type)) {
            compatible = true;
        }
        
        if (motherboard && motherboard.ramType === ram.type) {
            compatible = true;
        }
        
        if (cpu && motherboard) {
            compatible = cpu.ramType.includes(ram.type) && motherboard.ramType === ram.type;
        }
        
        if (!compatible) {
            option.classList.add('incompatible');
            option.disabled = true;
        } else {
            option.classList.remove('incompatible');
            option.disabled = false;
        }
    });
}

function checkCPUGPUBottleneck(cpu, gpu) {
    if (!cpu || !gpu) return;
    
    const gpuInfo = gpuData[gpu];
    if (!gpuInfo) return;
    
    if (isBottleneck(cpu, gpuInfo)) {
        const bottleneckPercentage = calculateBottleneckPercentage(cpu, gpuInfo);
        if (bottleneckPercentage >= 10) {
            addStatusIndicator('gpu-box', 'Bottleneck Risk', 'warning');
            document.getElementById('gpu-box').classList.add('warning');
            showToast(`${gpu} causes a bottleneck with your current setup.`, 'warning');
        }
    } else if (isOverkill(cpu, gpuInfo)) {
        addStatusIndicator('gpu-box', 'Overkill / Bad pairing', 'warning');
        document.getElementById('gpu-box').classList.add('warning');
        showToast(`Overkill / Bad pairing.`, 'error');
    } else {
        addStatusIndicator('gpu-box', 'Balanced Choice', 'optimized');
        document.getElementById('gpu-box').classList.add('optimized');
        showToast('Balanced and efficient for most users.', 'success');
    }
}

function isBottleneck(cpu, gpuInfo) {
    // Budget CPU with high-end GPU = bottleneck
    if (cpu.tier === 'budget' && (gpuInfo.tier === 'balanced' || gpuInfo.tier === 'maxed')) {
        return true;
    }
    
    // Balanced CPU with maxed GPU = potential bottleneck
    if (cpu.tier === 'balanced' && gpuInfo.tier === 'maxed') {
        return true;
    }
    
    return false;
}

function isOverkill(cpu, gpuInfo) {
    if (cpu.tier === 'maxed' && gpuInfo.tier === 'budget') {
        return true;
    }
    
    return false;
}

function calculateBottleneckPercentage(cpu, gpuInfo) {
    if (cpu.tier === 'budget' && gpuInfo.tier === 'balanced') return 15;
    if (cpu.tier === 'budget' && gpuInfo.tier === 'maxed') return 25;
    if (cpu.tier === 'balanced' && gpuInfo.tier === 'maxed') return 12;
    return 10;
}

function checkPSUAdequacy(gpu, psu) {
    if (!gpu || !psu) return;
    
    const gpuInfo = gpuData[gpu];
    const psuInfo = psuData[psu];
    
    if (!gpuInfo || !psuInfo) return;
    
    if (psuInfo.wattage < gpuInfo.minPSU) {
        addStatusIndicator('psu-box', 'Inadequate Power', 'warning');
        document.getElementById('psu-box').classList.add('warning');
        showToast(`PSU wattage too low for selected GPU. Minimum ${gpuInfo.minPSU}W required.`, 'error');
    } else {
        addStatusIndicator('psu-box', 'Adequate Power', 'optimized');
        document.getElementById('psu-box').classList.add('optimized');
    }
}

function checkOverallOptimization(cpu, motherboard, gpu, ram, psu) {
    if (!cpu || !motherboard || !gpu || !ram || !psu) return;
    
    const gpuInfo = gpuData[gpu];
    const psuInfo = psuData[psu];
    const ramInfo = ramData[ram];
    
    if (!gpuInfo || !psuInfo || !ramInfo) return;
    
    // Check if all components are optimally matched
    const cpuGPUMatch = !isBottleneck(cpu, gpuInfo) && !isOverkill(cpu, gpuInfo);
    const psuAdequate = psuInfo.wattage >= gpuInfo.minPSU;
    const ramCompatible = cpu.ramType.includes(ramInfo.type) && motherboard.ramType === ramInfo.type;
    const socketMatch = cpu.socket === motherboard.socket;
    
    if (cpuGPUMatch && psuAdequate && ramCompatible && socketMatch) {
        // Mark optimized components that aren't already marked as warning
        ['cpu-box', 'motherboard-box', 'ram-box', 'storage-box', 'case-box'].forEach(boxId => {
            const box = document.getElementById(boxId);
            if (!box.classList.contains('warning')) {
                box.classList.add('optimized');
                addStatusIndicator(boxId, 'Optimized', 'optimized');
            }
        });
    }
}

function addStatusIndicator(boxId, text, type) {
    const box = document.getElementById(boxId);
    const existingIndicator = box.querySelector('.status-indicator');
    
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    const indicator = document.createElement('div');
    indicator.className = `status-indicator status-${type}`;
    indicator.textContent = text;
    box.appendChild(indicator);
}

function clearStatusIndicators() {
    document.querySelectorAll('.status-indicator').forEach(indicator => {
        indicator.remove();
    });
    
    document.querySelectorAll('.component-box').forEach(box => {
        box.classList.remove('optimized', 'warning');
    });
    
    // Reset option states
    document.querySelectorAll('option').forEach(option => {
        option.classList.remove('incompatible', 'warning', 'optimized');
        option.disabled = false;
    });
}

function updateBuildStatus(cpu, motherboard, gpu, ram, psu, storage, pcCase) {
    const buildStatus = document.getElementById('build-status');
    
    // Check if all components are selected
    if (!cpu || !motherboard || !gpu || !ram || !psu || !storage || !pcCase) {
        buildStatus.textContent = 'Select all components to check build compatibility';
        buildStatus.className = 'build-status';
        return;
    }
    
    const gpuInfo = gpuData[gpu];
    const psuInfo = psuData[psu];
    const ramInfo = ramData[ram];
    
    if (!gpuInfo || !psuInfo || !ramInfo) {
        buildStatus.textContent = 'Invalid component selection detected';
        buildStatus.className = 'build-status incompatible';
        return;
    }
    
    // Check compatibility issues
    const issues = [];
    
    // Socket compatibility
    if (cpu.socket !== motherboard.socket) {
        issues.push('CPU and motherboard socket mismatch');
    }
    
    // RAM compatibility
    if (!cpu.ramType.includes(ramInfo.type) || motherboard.ramType !== ramInfo.type) {
        issues.push('RAM type incompatible with CPU/motherboard');
    }
    
    // PSU adequacy
    if (psuInfo.wattage < gpuInfo.minPSU) {
        issues.push('PSU insufficient for GPU requirements');
    }
    
    // CPU-GPU bottleneck
    if (isBottleneck(cpu, gpuInfo) || isOverkill(cpu, gpuInfo)) {
        issues.push('CPU-GPU pairing suboptimal');
    }
    
    if (issues.length === 0) {
        buildStatus.textContent = 'This build is compatible and will work perfectly!';
        buildStatus.className = 'build-status compatible';
    } else {
        buildStatus.textContent = `Build issues detected: ${issues.join(', ')}`;
        buildStatus.className = 'build-status incompatible';
    }
}

// Close feedback panel when clicking outside
document.addEventListener('click', (e) => {
    if (!feedbackPanel.contains(e.target) && !e.target.closest('.component-dropdown')) {
        hideFeedbackPanel();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    init();
});